"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coherenceWeights = exports.latentDimensions = void 0;
exports.deriveLatentFromIssues = deriveLatentFromIssues;
exports.applyIdeologicalInertia = applyIdeologicalInertia;
exports.implicationViolation = implicationViolation;
exports.calculateRulePenalty = calculateRulePenalty;
exports.calculateAgendaPenalty = calculateAgendaPenalty;
exports.calculateFrameFit = calculateFrameFit;
exports.calculateOriginPenalty = calculateOriginPenalty;
exports.calculatePartyCoherence = calculatePartyCoherence;
exports.recalculateIssueLayer = recalculateIssueLayer;
exports.updateIssuePosition = updateIssuePosition;
exports.activateCampaignPackage = activateCampaignPackage;
exports.answerProgramMediaQuestion = answerProgramMediaQuestion;
exports.answerCampaignTrip = answerCampaignTrip;
exports.answerDebateAttack = answerDebateAttack;
exports.generateDebateAttack = generateDebateAttack;
exports.calculateIssueFitForVoter = calculateIssueFitForVoter;
exports.issueLayerUtilityModifier = issueLayerUtilityModifier;
exports.latentDimensions = [
    'econ',
    'culture',
    'authority',
    'establishment',
    'globalism',
    'green',
    'ukraine',
];
exports.coherenceWeights = {
    agenda: 0.9,
    audience: 0.45,
    frame: 0.8,
    origin: 0.65,
    residual: 0.35,
    rules: 1.1,
};
function deriveLatentFromIssues(issuePositions, issues, framings = []) {
    const sums = emptyVector();
    const weights = emptyVector();
    for (const issue of issues) {
        const position = issuePositions[issue.id];
        if (!position) {
            continue;
        }
        const normalizedPosition = clamp(position.position / 2, -1, 1);
        const salienceWeight = 0.28 + 0.18 * clamp(position.salience, 0, 4);
        const framing = position.framingId ? framings.find((item) => item.id === position.framingId) : undefined;
        for (const [dimension, loading] of Object.entries(issue.dimensionLoadings)) {
            const framingEffect = framing?.dimensionEffects?.[dimension] ?? 0;
            sums[dimension] += normalizedPosition * salienceWeight * (loading + framingEffect);
            weights[dimension] += salienceWeight * Math.abs(loading);
        }
    }
    return Object.fromEntries(exports.latentDimensions.map((dimension) => [dimension, weights[dimension] > 0 ? clamp(sums[dimension] / weights[dimension], -1, 1) : 0]));
}
function applyIdeologicalInertia(currentLatentPosition, issueDerivedLatentPosition, flexibility) {
    const inertia = clamp(1 - flexibility, 0.15, 0.9);
    return Object.fromEntries(exports.latentDimensions.map((dimension) => {
        const current = currentLatentPosition[dimension] ?? 0;
        const target = issueDerivedLatentPosition[dimension] ?? current;
        return [dimension, clamp(inertia * current + (1 - inertia) * target, -1, 1)];
    }));
}
function implicationViolation(partyIssues, relation) {
    const from = partyIssues[relation.from];
    const to = partyIssues[relation.to];
    if (!from || !to) {
        return 0;
    }
    const fromExpected = directionValue(relation.expectedFromDirection);
    const toExpected = directionValue(relation.expectedToDirection);
    const fromAlignment = fromExpected === 0 ? Math.abs(from.position) / 2 : clamp((from.position * fromExpected) / 2, 0, 1);
    const toContradiction = toExpected === 0 ? 0 : clamp((-to.position * toExpected) / 2, 0, 1);
    const toWeakness = toExpected === 0 ? 0 : clamp(1 - (to.position * toExpected) / 2, 0, 1);
    const salienceModifier = relation.salienceSensitive ? saliencePairModifier(from.salience, to.salience) : 1;
    if (relation.type === 'implies' || relation.type === 'usually_implies') {
        const strictness = relation.type === 'implies' ? 1 : 0.72;
        return relation.strength * relation.confidenceForward * strictness * fromAlignment * toContradiction * salienceModifier;
    }
    if (relation.type === 'excludes') {
        const toAlignment = toExpected === 0 ? Math.abs(to.position) / 2 : clamp((to.position * toExpected) / 2, 0, 1);
        return relation.strength * fromAlignment * toAlignment * salienceModifier;
    }
    if (relation.type === 'tension' || relation.type === 'requires_framing') {
        const tension = relation.type === 'requires_framing' ? 0.45 : 0.7;
        return relation.strength * tension * fromAlignment * Math.max(toContradiction, toWeakness * 0.35) * salienceModifier;
    }
    if (relation.type === 'splits_audience') {
        const toAlignment = toExpected === 0 ? Math.abs(to.position) / 2 : clamp((to.position * toExpected) / 2, 0, 1);
        return relation.strength * 0.35 * fromAlignment * toAlignment * salienceModifier;
    }
    return 0;
}
function calculateRulePenalty(partyIssues, issueRelations) {
    return issueRelations.reduce((sum, relation) => sum + implicationViolation(partyIssues, relation), 0);
}
function calculateAgendaPenalty(partyIssues, issues = [], campaignPackages = [], activePackageIds = []) {
    const highSalience = Object.values(partyIssues).filter((position) => position.salience >= 3);
    const flagship = Object.values(partyIssues).filter((position) => position.salience >= 4);
    const activeIssues = new Set(activePackageIds.flatMap((id) => campaignPackages.find((pack) => pack.id === id)?.issueIds ?? []));
    const domains = new Set(highSalience
        .map((position) => issues.find((issue) => issue.id === position.issueId)?.domain)
        .filter(Boolean));
    const packagedHighSalience = highSalience.filter((position) => activeIssues.has(position.issueId)).length;
    const packageRelief = highSalience.length > 0 ? (packagedHighSalience / highSalience.length) * 0.45 : 0;
    const overload = Math.max(0, highSalience.length - 5) * 0.22 + Math.max(0, flagship.length - 2) * 0.35;
    const unfocused = highSalience.length < 2 ? 0.45 : 0;
    const domainScatter = Math.max(0, domains.size - 3) * 0.18;
    return Math.max(0, overload + unfocused + domainScatter - packageRelief);
}
function calculateFrameFit(partyIssues, frames) {
    let bestFrame;
    let bestScore = -Infinity;
    for (const frame of frames) {
        let score = 0;
        let weight = 0;
        for (const [issueId, expected] of Object.entries(frame.expectedIssues)) {
            const current = partyIssues[issueId];
            if (!current || expected === undefined) {
                continue;
            }
            const tolerance = frame.tolerance[issueId] ?? 0.6;
            const distance = Math.abs(current.position / 2 - expected);
            const salienceWeight = 0.5 + current.salience / 4;
            score += Math.max(0, 1 - distance / Math.max(0.2, tolerance)) * salienceWeight;
            weight += salienceWeight;
        }
        const normalizedScore = weight > 0 ? score / weight : 0;
        if (normalizedScore > bestScore) {
            bestFrame = frame;
            bestScore = normalizedScore;
        }
    }
    return {
        bestFrame,
        frameFitScore: clamp(bestScore, 0, 1),
        framePenalty: clamp(1 - bestScore, 0, 1),
    };
}
function calculateOriginPenalty(currentIssuePositions, originalIssuePositions, partyFlexibility) {
    let total = 0;
    let weight = 0;
    for (const [issueId, current] of Object.entries(currentIssuePositions)) {
        const original = originalIssuePositions[issueId];
        if (!original) {
            continue;
        }
        const movement = Math.abs(current.position - original.position) / 4;
        const salienceWeight = 0.35 + current.salience / 4;
        const rigidityWeight = 0.4 + original.stability * 0.6 + current.rigidity * 0.35;
        total += movement * salienceWeight * rigidityWeight;
        weight += salienceWeight;
    }
    const flexibilityRelief = 0.35 + partyFlexibility * 0.8;
    return weight > 0 ? total / weight / flexibilityRelief : 0;
}
function calculatePartyCoherence(party, issues, relations, frames, campaignPackages, flexibility) {
    const rulePenalty = calculateRulePenalty(party.currentIssuePositions, relations);
    const agendaPenalty = calculateAgendaPenalty(party.currentIssuePositions, issues, campaignPackages, party.activeCampaignPackages);
    const frameResult = calculateFrameFit(party.currentIssuePositions, frames);
    const originPenalty = calculateOriginPenalty(party.currentIssuePositions, party.originalIssuePositions, flexibility);
    const residualPenalty = calculateResidualPenalty(party.currentIssuePositions, issues);
    const audiencePenalty = calculateAudiencePenalty(party.currentIssuePositions, relations);
    const totalIncoherence = exports.coherenceWeights.rules * rulePenalty +
        exports.coherenceWeights.residual * residualPenalty +
        exports.coherenceWeights.frame * frameResult.framePenalty +
        exports.coherenceWeights.origin * originPenalty +
        exports.coherenceWeights.audience * audiencePenalty +
        exports.coherenceWeights.agenda * agendaPenalty;
    return {
        agendaPenalty,
        audiencePenalty,
        coherenceScore: Math.round(100 * Math.exp(-totalIncoherence)),
        framePenalty: frameResult.framePenalty,
        originPenalty,
        residualPenalty,
        rulePenalty,
        totalIncoherence,
    };
}
function recalculateIssueLayer(layer, flexibility) {
    const frame = calculateFrameFit(layer.player.currentIssuePositions, layer.ideologicalFrames);
    const coherenceBreakdown = calculatePartyCoherence(layer.player, layer.issues, layer.relations, layer.ideologicalFrames, layer.campaignPackages, flexibility);
    const metrics = calculateProgramMetrics(layer.player, layer.issues, layer.framings, coherenceBreakdown);
    return {
        ...layer,
        debateAttack: generateDebateAttack({
            ...layer.player,
            activeIdeologicalFrame: frame.bestFrame?.id,
            coherenceBreakdown,
            ...metrics,
        }, coherenceBreakdown, layer.relations, layer.issues),
        player: {
            ...layer.player,
            activeIdeologicalFrame: frame.bestFrame?.id,
            coherenceBreakdown,
            ...metrics,
        },
    };
}
function updateIssuePosition(layer, issueId, patch, flexibility) {
    const current = layer.player.currentIssuePositions[issueId];
    if (!current) {
        return layer;
    }
    const nextLayer = {
        ...layer,
        player: {
            ...layer.player,
            currentIssuePositions: {
                ...layer.player.currentIssuePositions,
                [issueId]: sanitizeIssuePosition({ ...current, ...patch }),
            },
        },
    };
    return withFeedback(recalculateIssueLayer(nextLayer, flexibility), 'Program upraven', 'Zmena programu se propsala do citelnosti, koherence a latentni pozice strany.');
}
function activateCampaignPackage(layer, packageId, flexibility) {
    const pack = layer.campaignPackages.find((candidate) => candidate.id === packageId);
    if (!pack) {
        return layer;
    }
    const currentPositions = { ...layer.player.currentIssuePositions };
    for (const issueId of pack.issueIds) {
        const current = currentPositions[issueId];
        if (current) {
            currentPositions[issueId] = sanitizeIssuePosition({ ...current, salience: current.salience + 1 });
        }
    }
    const nextLayer = {
        ...layer,
        player: {
            ...layer.player,
            activeCampaignPackages: Array.from(new Set([...layer.player.activeCampaignPackages, packageId])).slice(-2),
            currentIssuePositions: currentPositions,
            mediaVulnerability: clamp(layer.player.mediaVulnerability + pack.mediaRiskModifier, 0, 1),
            programLegibility: clamp(layer.player.programLegibility + pack.legibilityBonus, 0, 1),
        },
    };
    return withFeedback(recalculateIssueLayer(nextLayer, flexibility), pack.name, 'Balicek zvedl salienci souvisejicich temat a snizil chaos agendy, pokud temata drzi pohromade.');
}
function answerProgramMediaQuestion(layer, questionId, answerId, flexibility) {
    const question = layer.mediaQuestions.find((item) => item.id === questionId);
    const answer = question?.answerOptions.find((item) => item.id === answerId);
    if (!question || !answer) {
        return layer;
    }
    const nextLayer = applyMediaAnswer(layer, question.issueId, answer);
    return withFeedback(recalculateIssueLayer({ ...nextLayer, pendingMediaQuestionId: nextPendingId(layer.mediaQuestions, questionId) }, flexibility), question.title, answer.description);
}
function answerCampaignTrip(layer, tripId, optionId, flexibility) {
    const trip = layer.tripEvents.find((item) => item.id === tripId);
    const option = trip?.options.find((item) => item.id === optionId);
    if (!trip || !option) {
        return layer;
    }
    const nextLayer = applyTripOption(layer, option);
    return withFeedback(recalculateIssueLayer({ ...nextLayer, pendingCampaignTripId: nextPendingId(layer.tripEvents, tripId) }, flexibility), trip.title, option.description);
}
function answerDebateAttack(layer, responseId, flexibility) {
    const attack = layer.debateAttack;
    const response = attack?.responseOptions.find((item) => item.id === responseId);
    if (!attack || !response) {
        return layer;
    }
    const nextLayer = applyDebateResponse(layer, response, attack.relatedIssues);
    return withFeedback(recalculateIssueLayer({ ...nextLayer, debateAttack: undefined }, flexibility), attack.title, response.description);
}
function generateDebateAttack(party, coherenceBreakdown, relations, issues = []) {
    if (coherenceBreakdown.totalIncoherence < 0.35) {
        return undefined;
    }
    const visibleRelation = relations
        .map((relation) => ({
        relation,
        penalty: implicationViolation(party.currentIssuePositions, relation),
    }))
        .sort((a, b) => b.penalty - a.penalty)[0];
    if (visibleRelation && visibleRelation.penalty > 0.08) {
        const fromName = issueName(issues, visibleRelation.relation.from);
        const toName = issueName(issues, visibleRelation.relation.to);
        return {
            id: `debate-${visibleRelation.relation.from}-${visibleRelation.relation.to}`,
            relatedIssues: [visibleRelation.relation.from, visibleRelation.relation.to],
            responseOptions: debateResponseOptions(visibleRelation.relation.from, visibleRelation.relation.to),
            severity: clamp(visibleRelation.penalty, 0, 1),
            text: `Souperi napadaji kombinaci temat ${fromName} a ${toName}. Volici slysi rozpor, pokud ho nevysvetlite.`,
            title: 'Utocna otazka na rozpor v programu',
        };
    }
    if (coherenceBreakdown.agendaPenalty > 0.25) {
        const topIssues = Object.values(party.currentIssuePositions)
            .filter((position) => position.salience >= 3)
            .slice(0, 3)
            .map((position) => position.issueId);
        return {
            id: 'debate-overloaded-agenda',
            relatedIssues: topIssues,
            responseOptions: debateResponseOptions(...topIssues.slice(0, 2)),
            severity: clamp(coherenceBreakdown.agendaPenalty, 0, 1),
            text: 'Moderator tvrdi, ze program slibuje vsechno najednou a nema hlavni prioritu.',
            title: 'Preplnena agenda',
        };
    }
    return {
        id: 'debate-origin-risk',
        relatedIssues: [],
        responseOptions: debateResponseOptions(),
        severity: clamp(coherenceBreakdown.originPenalty, 0, 1),
        text: 'Souperi tvrdi, ze se strana vzdaluje od vlastni identity.',
        title: 'Otazka na identitu strany',
    };
}
function calculateIssueFitForVoter(segment, party, issues) {
    if (!party || !issues || !segment.space) {
        return 0;
    }
    let score = 0;
    let weight = 0;
    for (const issue of issues) {
        const position = party.currentIssuePositions[issue.id];
        if (!position || position.salience <= 0) {
            continue;
        }
        const explicitPreference = segment.issuePrefs[issue.id];
        const voterPreference = explicitPreference !== undefined
            ? clamp(explicitPreference / 2, -1, 1)
            : inferVoterIssuePreference(segment, issue);
        const partyPosition = clamp(position.position / 2, -1, 1);
        const closeness = 1 - Math.abs(voterPreference - partyPosition) / 2;
        const salienceWeight = 0.08 + position.salience * 0.08 + issue.defaultSalience * 0.08;
        score += salienceWeight * (closeness - 0.5);
        weight += salienceWeight;
    }
    return weight > 0 ? score / weight : 0;
}
function issueLayerUtilityModifier(layer, segment, partyIsPlayer) {
    if (!layer || !partyIsPlayer) {
        return 0;
    }
    const issueFit = calculateIssueFitForVoter(segment, layer.player, layer.issues);
    const coherence = layer.player.coherenceBreakdown.coherenceScore / 100;
    const incoherencePenalty = (1 - coherence) * 0.18;
    const legibilityBonus = (layer.player.programLegibility - 0.5) * 0.08;
    return issueFit * 0.22 + legibilityBonus - incoherencePenalty;
}
function applyMediaAnswer(layer, issueId, answer) {
    const current = layer.player.currentIssuePositions[issueId];
    if (!current) {
        return layer;
    }
    return {
        ...layer,
        player: {
            ...layer.player,
            coreLoyalty: clamp(layer.player.coreLoyalty + (answer.baseMobilizationModifier ?? 0), 0, 1),
            currentIssuePositions: {
                ...layer.player.currentIssuePositions,
                [issueId]: sanitizeIssuePosition({
                    ...current,
                    framingId: answer.framingId ?? current.framingId,
                    position: current.position + (answer.positionDelta ?? 0),
                    rigidity: current.rigidity + (answer.rigidityDelta ?? 0),
                    salience: current.salience + (answer.salienceDelta ?? 0),
                }),
            },
            mediaVulnerability: clamp(layer.player.mediaVulnerability + (answer.mediaVulnerabilityModifier ?? 0) - (answer.coherenceModifier ?? 0) * 0.25, 0, 1),
            swingAppeal: clamp(layer.player.swingAppeal + (answer.swingAppealModifier ?? 0), 0, 1),
        },
    };
}
function applyTripOption(layer, option) {
    const currentPositions = { ...layer.player.currentIssuePositions };
    for (const issueId of [...option.emphasizedIssues, ...(option.deEmphasizedIssues ?? [])]) {
        const current = currentPositions[issueId];
        if (!current) {
            continue;
        }
        const delta = option.salienceDeltas?.[issueId] ?? (option.emphasizedIssues.includes(issueId) ? 1 : -1);
        currentPositions[issueId] = sanitizeIssuePosition({
            ...current,
            framingId: option.framingChanges?.[issueId] ?? current.framingId,
            salience: current.salience + delta,
        });
    }
    return {
        ...layer,
        player: {
            ...layer.player,
            coreLoyalty: clamp(layer.player.coreLoyalty + (option.baseMobilizationModifier ?? 0), 0, 1),
            currentIssuePositions: currentPositions,
            mediaVulnerability: clamp(layer.player.mediaVulnerability + (option.mediaRiskModifier ?? 0) - (option.coherenceModifier ?? 0) * 0.25, 0, 1),
            swingAppeal: clamp(layer.player.swingAppeal + (option.swingAppealModifier ?? option.nationalSupportModifier ?? 0), 0, 1),
        },
    };
}
function applyDebateResponse(layer, response, relatedIssues) {
    const currentPositions = { ...layer.player.currentIssuePositions };
    for (const issueId of relatedIssues) {
        const current = currentPositions[issueId];
        if (!current) {
            continue;
        }
        currentPositions[issueId] = sanitizeIssuePosition({
            ...current,
            framingId: response.framingChanges?.[issueId] ?? current.framingId,
            rigidity: current.rigidity + (response.rigidityDelta ?? 0),
            salience: current.salience + (response.salienceDeltas?.[issueId] ?? 0),
        });
    }
    return {
        ...layer,
        player: {
            ...layer.player,
            coreLoyalty: clamp(layer.player.coreLoyalty + (response.baseMobilizationModifier ?? 0), 0, 1),
            currentIssuePositions: currentPositions,
            mediaVulnerability: clamp(layer.player.mediaVulnerability + (response.mediaVulnerabilityModifier ?? 0) - (response.coherenceModifier ?? 0) * 0.2, 0, 1),
            swingAppeal: clamp(layer.player.swingAppeal + (response.swingAppealModifier ?? 0), 0, 1),
        },
    };
}
function calculateProgramMetrics(party, issues, framings, coherence) {
    const selectedFramings = Object.values(party.currentIssuePositions)
        .map((position) => position.framingId && framings.find((framing) => framing.id === position.framingId))
        .filter(Boolean);
    const framingLegibility = average(selectedFramings.map((framing) => framing.legibilityModifier), 0);
    const issueLegibility = average(Object.values(party.currentIssuePositions).map((position) => {
        const issue = issues.find((item) => item.id === position.issueId);
        return (issue?.legibility ?? 0.55) * (0.4 + position.salience / 6);
    }), 0.5);
    const controversialSalience = Object.values(party.currentIssuePositions).reduce((sum, position) => {
        const issue = issues.find((item) => item.id === position.issueId);
        return sum + (issue?.controversy ?? 0.4) * position.salience * Math.abs(position.position / 2);
    }, 0);
    return {
        coreLoyalty: clamp(0.42 + coherence.coherenceScore / 250 + party.activeCampaignPackages.length * 0.03, 0, 1),
        factionTension: clamp(0.15 + coherence.originPenalty * 0.8 + coherence.rulePenalty * 0.22, 0, 1),
        mediaVulnerability: clamp(0.18 + coherence.totalIncoherence * 0.12 + controversialSalience / 80, 0, 1),
        programLegibility: clamp(0.35 + issueLegibility * 0.35 + framingLegibility - coherence.agendaPenalty * 0.16, 0, 1),
        swingAppeal: clamp(0.34 + coherence.coherenceScore / 300 - coherence.rulePenalty * 0.08 - controversialSalience / 100, 0, 1),
    };
}
function calculateResidualPenalty(partyIssues, issues) {
    const active = Object.values(partyIssues).filter((position) => position.salience > 0);
    if (active.length === 0) {
        return 0.5;
    }
    const weightedExtremity = active.reduce((sum, position) => {
        const issue = issues.find((item) => item.id === position.issueId);
        return sum + Math.abs(position.position / 2) * position.salience * (issue?.polarization ?? 0.5);
    }, 0);
    const salienceTotal = active.reduce((sum, position) => sum + position.salience, 0);
    return salienceTotal > 0 ? weightedExtremity / salienceTotal : 0;
}
function calculateAudiencePenalty(partyIssues, relations) {
    return relations
        .filter((relation) => relation.type === 'splits_audience')
        .reduce((sum, relation) => sum + implicationViolation(partyIssues, relation) * 0.7, 0);
}
function inferVoterIssuePreference(segment, issue) {
    const space = segment.space;
    if (!space) {
        return 0;
    }
    let sum = 0;
    let weight = 0;
    for (const [dimension, loading] of Object.entries(issue.dimensionLoadings)) {
        const voterValue = space[dimension];
        sum += voterValue * loading;
        weight += Math.abs(loading);
    }
    return weight > 0 ? clamp(sum / weight, -1, 1) : 0;
}
function debateResponseOptions(issueA, issueB) {
    return [
        {
            id: 'doubleDown',
            label: 'Trvat na svem',
            description: 'Mobilizuje jadro, ale zvysi rigiditu a mediální tlak.',
            baseMobilizationModifier: 0.04,
            mediaVulnerabilityModifier: 0.05,
            rigidityDelta: 0.06,
            salienceDeltas: Object.fromEntries([issueA, issueB].filter(Boolean).map((issueId) => [issueId, 1])),
        },
        {
            id: 'compromise',
            label: 'Hledat kompromis',
            description: 'Snizi napeti a mediální zranitelnost, ale oslabuje ostrost sdeleni.',
            coherenceModifier: 0.05,
            mediaVulnerabilityModifier: -0.05,
            rigidityDelta: -0.06,
            swingAppealModifier: 0.04,
        },
        {
            id: 'reframe',
            label: 'Preformulovat ramec',
            description: 'Vysvetli kombinaci temat a zlepsi citelnost programu.',
            coherenceModifier: 0.07,
            mediaVulnerabilityModifier: -0.03,
            swingAppealModifier: 0.02,
        },
        {
            id: 'pivot',
            label: 'Prejit na silne tema',
            description: 'Omezi skodu, ale nechava cast rozporu nezodpovezenou.',
            salienceDeltas: issueA ? { [issueA]: -1 } : {},
            mediaVulnerabilityModifier: -0.02,
        },
    ];
}
function sanitizeIssuePosition(position) {
    return {
        ...position,
        position: clamp(position.position, -2, 2),
        rigidity: clamp(position.rigidity, 0, 1),
        salience: Math.round(clamp(position.salience, 0, 4)),
        stability: clamp(position.stability, 0, 1),
    };
}
function saliencePairModifier(a, b) {
    return 0.35 + 0.65 * Math.sqrt((clamp(a, 0, 4) / 4) * (clamp(b, 0, 4) / 4));
}
function directionValue(direction) {
    if (direction === 'pro') {
        return 1;
    }
    if (direction === 'against') {
        return -1;
    }
    return 0;
}
function withFeedback(layer, title, message) {
    const feedback = {
        id: `program-feedback-${layer.feedbackLog.length + 1}`,
        message,
        metrics: {
            coherence: layer.player.coherenceBreakdown.coherenceScore,
            core: layer.player.coreLoyalty,
            faction: layer.player.factionTension,
            legibility: layer.player.programLegibility,
            media: layer.player.mediaVulnerability,
            swing: layer.player.swingAppeal,
        },
        title,
        week: 0,
    };
    return {
        ...layer,
        feedbackLog: [feedback, ...layer.feedbackLog].slice(0, 8),
    };
}
function nextPendingId(items, currentId) {
    const index = items.findIndex((item) => item.id === currentId);
    if (index < 0 || items.length === 0) {
        return undefined;
    }
    return items[(index + 1) % items.length]?.id;
}
function issueName(issues, issueId) {
    return issues.find((issue) => issue.id === issueId)?.shortName ?? issueId;
}
function emptyVector() {
    return {
        authority: 0,
        culture: 0,
        econ: 0,
        establishment: 0,
        globalism: 0,
        green: 0,
        ukraine: 0,
    };
}
function average(values, fallback) {
    return values.length > 0 ? values.reduce((sum, value) => sum + value, 0) / values.length : fallback;
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
