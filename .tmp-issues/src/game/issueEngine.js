"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coherenceWeights = exports.latentDimensions = void 0;
exports.deriveLatentFromIssues = deriveLatentFromIssues;
exports.applyIdeologicalInertia = applyIdeologicalInertia;
exports.implicationViolation = implicationViolation;
exports.calculateRulePenalty = calculateRulePenalty;
exports.evaluateIssueGraph = evaluateIssueGraph;
exports.calculateAgendaPenalty = calculateAgendaPenalty;
exports.calculateFrameFit = calculateFrameFit;
exports.calculateOriginPenalty = calculateOriginPenalty;
exports.calculatePartyCoherence = calculatePartyCoherence;
exports.recalculateIssueLayer = recalculateIssueLayer;
exports.updateIssuePosition = updateIssuePosition;
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
    contradiction: 1.2,
    frame: 0.8,
    origin: 0.65,
    residual: 0.35,
    rules: 1.1,
    tension: 0.75,
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
    const evaluation = evaluateIssueGraph(partyIssues, [relation]);
    return evaluation.rulePenalty + evaluation.contradictionPenalty + evaluation.unresolvedTensionPenalty + evaluation.audiencePenalty;
}
function calculateRulePenalty(partyIssues, issueRelations) {
    return evaluateIssueGraph(partyIssues, issueRelations).rulePenalty;
}
function evaluateIssueGraph(partyIssues, issueRelations, framings = []) {
    const result = {
        audiencePenalty: 0,
        clusterCoherenceBonus: 0,
        contradictionPenalty: 0,
        mobilizationOverlapBonus: 0,
        relationNotes: [],
        rulePenalty: 0,
        sameFamilyBonus: 0,
        unresolvedTensionPenalty: 0,
    };
    for (const relation of issueRelations) {
        const from = partyIssues[relation.from];
        const to = partyIssues[relation.to];
        if (!from || !to) {
            continue;
        }
        const salienceModifier = relation.salienceSensitive ? saliencePairModifier(from.salience, to.salience) : 1;
        const fromAlignment = relationAlignment(from, relation.expectedFromDirection);
        const toAlignment = relationAlignment(to, relation.expectedToDirection);
        const fromContradiction = relationContradiction(from, relation.expectedFromDirection);
        const toContradiction = relationContradiction(to, relation.expectedToDirection);
        const compatibleStrength = fromAlignment * toAlignment * salienceModifier;
        if (relation.type === 'implies' || relation.type === 'usually_implies') {
            const strictness = relation.type === 'implies' ? 1 : 0.72;
            const forward = relation.strength * relation.confidenceForward * strictness * fromAlignment * toContradiction * salienceModifier;
            const reverse = relation.strength * relation.confidenceReverse * strictness * 0.85 * toAlignment * fromContradiction * salienceModifier;
            result.rulePenalty += forward + reverse;
            addRelationNote(result.relationNotes, relation, forward, 'rule');
            addRelationNote(result.relationNotes, relation, reverse, 'rule reverse');
            continue;
        }
        if (relation.type === 'excludes') {
            const penalty = relation.strength * relation.confidenceForward * compatibleStrength;
            result.contradictionPenalty += penalty;
            addRelationNote(result.relationNotes, relation, penalty, 'contradiction');
            continue;
        }
        if (relation.type === 'tension') {
            const framingRelief = hasUsefulFraming(relation, partyIssues, framings) ? 0.45 : 1;
            const penalty = relation.strength * relation.confidenceForward * 0.7 * compatibleStrength * framingRelief;
            result.unresolvedTensionPenalty += penalty;
            addRelationNote(result.relationNotes, relation, penalty, 'unresolved tension');
            continue;
        }
        if (relation.type === 'requires_framing') {
            const penalty = hasUsefulFraming(relation, partyIssues, framings)
                ? 0
                : relation.strength * relation.confidenceForward * 0.55 * compatibleStrength;
            result.unresolvedTensionPenalty += penalty;
            addRelationNote(result.relationNotes, relation, penalty, 'missing framing');
            continue;
        }
        if (relation.type === 'splits_audience') {
            const penalty = relation.strength * relation.confidenceForward * 0.45 * compatibleStrength;
            result.audiencePenalty += penalty;
            addRelationNote(result.relationNotes, relation, penalty, 'audience split');
            continue;
        }
        if (relation.type === 'same_family') {
            const bonus = relation.strength * relation.confidenceForward * 0.34 * compatibleStrength;
            result.sameFamilyBonus += bonus;
            addRelationNote(result.relationNotes, relation, -bonus, 'same family');
            continue;
        }
        if (relation.type === 'mobilizes_same_audience') {
            const bonus = relation.strength * relation.confidenceForward * 0.24 * compatibleStrength;
            result.mobilizationOverlapBonus += bonus;
            addRelationNote(result.relationNotes, relation, -bonus, 'mobilization overlap');
        }
    }
    result.clusterCoherenceBonus = clamp(result.sameFamilyBonus * 0.65 + result.mobilizationOverlapBonus * 0.45, 0, 0.8);
    result.relationNotes.sort((a, b) => Math.abs(b.score) - Math.abs(a.score));
    result.relationNotes = result.relationNotes.slice(0, 10);
    return result;
}
function calculateAgendaPenalty(partyIssues, issues = [], relations = [], graphEvaluation = evaluateIssueGraph(partyIssues, relations)) {
    const highSalience = Object.values(partyIssues).filter((position) => position.salience >= 3);
    const flagship = Object.values(partyIssues).filter((position) => position.salience >= 4);
    const domains = new Set(highSalience
        .map((position) => issues.find((issue) => issue.id === position.issueId)?.domain)
        .filter(Boolean));
    const overload = Math.max(0, highSalience.length - 5) * 0.22 + Math.max(0, flagship.length - 2) * 0.35;
    const unfocused = highSalience.length < 2 ? 0.45 : 0;
    const domainScatter = Math.max(0, domains.size - 3) * 0.18;
    const basePenalty = overload + unfocused + domainScatter;
    const clusterRelief = Math.min(basePenalty * 0.55, graphEvaluation.clusterCoherenceBonus);
    return Math.max(0, basePenalty - clusterRelief);
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
function calculatePartyCoherence(party, issues, relations, frames, flexibility, framings = []) {
    const graphEvaluation = evaluateIssueGraph(party.currentIssuePositions, relations, framings);
    const agendaPenalty = calculateAgendaPenalty(party.currentIssuePositions, issues, relations, graphEvaluation);
    const frameResult = calculateFrameFit(party.currentIssuePositions, frames);
    const originPenalty = calculateOriginPenalty(party.currentIssuePositions, party.originalIssuePositions, flexibility);
    const residualPenalty = calculateResidualPenalty(party.currentIssuePositions, issues);
    const totalIncoherence = exports.coherenceWeights.rules * graphEvaluation.rulePenalty +
        exports.coherenceWeights.contradiction * graphEvaluation.contradictionPenalty +
        exports.coherenceWeights.tension * graphEvaluation.unresolvedTensionPenalty +
        exports.coherenceWeights.residual * residualPenalty +
        exports.coherenceWeights.frame * frameResult.framePenalty +
        exports.coherenceWeights.origin * originPenalty +
        exports.coherenceWeights.audience * graphEvaluation.audiencePenalty +
        exports.coherenceWeights.agenda * agendaPenalty;
    return {
        agendaPenalty,
        audiencePenalty: graphEvaluation.audiencePenalty,
        clusterCoherenceBonus: graphEvaluation.clusterCoherenceBonus,
        coherenceScore: Math.min(100, Math.round(100 * Math.exp(-totalIncoherence))),
        contradictionPenalty: graphEvaluation.contradictionPenalty,
        framePenalty: frameResult.framePenalty,
        mobilizationOverlapBonus: graphEvaluation.mobilizationOverlapBonus,
        originPenalty,
        residualPenalty,
        relationNotes: graphEvaluation.relationNotes,
        rulePenalty: graphEvaluation.rulePenalty,
        sameFamilyBonus: graphEvaluation.sameFamilyBonus,
        totalIncoherence,
        unresolvedTensionPenalty: graphEvaluation.unresolvedTensionPenalty,
    };
}
function recalculateIssueLayer(layer, flexibility) {
    const frame = calculateFrameFit(layer.player.currentIssuePositions, layer.ideologicalFrames);
    const coherenceBreakdown = calculatePartyCoherence(layer.player, layer.issues, layer.relations, layer.ideologicalFrames, flexibility, layer.framings);
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
    const maxChanges = layer.player.maxProgramChangesPerWeek ?? 3;
    const usedChanges = layer.player.programChangesThisWeek ?? 0;
    if (usedChanges >= maxChanges) {
        return layer;
    }
    const nextPosition = sanitizeIssuePosition({ ...current, ...patch });
    if (nextPosition.position === current.position &&
        nextPosition.salience === current.salience &&
        nextPosition.rigidity === current.rigidity &&
        nextPosition.framingId === current.framingId) {
        return layer;
    }
    const nextLayer = {
        ...layer,
        player: {
            ...layer.player,
            currentIssuePositions: {
                ...layer.player.currentIssuePositions,
                [issueId]: nextPosition,
            },
            programChangesThisWeek: usedChanges + 1,
        },
    };
    return withFeedback(recalculateIssueLayer(nextLayer, flexibility), 'Program upraven', 'Zmena programu se propsala do citelnosti, koherence a latentni pozice strany.');
}
function answerProgramMediaQuestion(layer, questionId, answerId, flexibility) {
    const question = layer.mediaQuestions.find((item) => item.id === questionId);
    const answer = question?.answerOptions.find((item) => item.id === answerId);
    const resolvedIds = layer.resolvedMediaQuestionIds ?? [];
    if (!question || !answer || questionId !== layer.pendingMediaQuestionId || resolvedIds.includes(questionId)) {
        return layer;
    }
    const nextLayer = applyMediaAnswer(layer, question.issueId, answer);
    return withFeedback(recalculateIssueLayer({
        ...nextLayer,
        pendingMediaQuestionId: nextPendingId(layer.mediaQuestions, questionId, [...resolvedIds, questionId]),
        resolvedMediaQuestionIds: [...resolvedIds, questionId],
    }, flexibility), question.title, answer.description);
}
function answerCampaignTrip(layer, tripId, optionId, flexibility) {
    const trip = layer.tripEvents.find((item) => item.id === tripId);
    const option = trip?.options.find((item) => item.id === optionId);
    const resolvedIds = layer.resolvedCampaignTripIds ?? [];
    if (!trip || !option || tripId !== layer.pendingCampaignTripId || resolvedIds.includes(tripId)) {
        return layer;
    }
    const nextLayer = applyTripOption(layer, option);
    return withFeedback(recalculateIssueLayer({
        ...nextLayer,
        pendingCampaignTripId: nextPendingId(layer.tripEvents, tripId, [...resolvedIds, tripId]),
        resolvedCampaignTripIds: [...resolvedIds, tripId],
    }, flexibility), trip.title, option.description);
}
function answerDebateAttack(layer, responseId, flexibility) {
    const attack = layer.debateAttack;
    const response = attack?.responseOptions.find((item) => item.id === responseId);
    const resolvedIds = layer.resolvedDebateAttackIds ?? [];
    if (!attack || !response || resolvedIds.includes(attack.id)) {
        return layer;
    }
    const nextLayer = applyDebateResponse(layer, response, attack.relatedIssues);
    return withFeedback(recalculateIssueLayer({ ...nextLayer, debateAttack: undefined, resolvedDebateAttackIds: [...resolvedIds, attack.id] }, flexibility), attack.title, response.description);
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
        coreLoyalty: clamp(0.42 + coherence.coherenceScore / 250, 0, 1),
        factionTension: clamp(0.15 + coherence.originPenalty * 0.8 + (coherence.rulePenalty + coherence.unresolvedTensionPenalty) * 0.2, 0, 1),
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
function relationAlignment(position, expectedDirection) {
    const expected = directionValue(expectedDirection);
    if (expected === 0) {
        return Math.abs(position.position) / 2;
    }
    return clamp((position.position * expected) / 2, 0, 1);
}
function relationContradiction(position, expectedDirection) {
    const expected = directionValue(expectedDirection);
    if (expected === 0) {
        return 0;
    }
    return clamp((-position.position * expected) / 2, 0, 1);
}
function hasUsefulFraming(relation, partyIssues, framings) {
    if (relation.type !== 'requires_framing' && relation.type !== 'tension') {
        return false;
    }
    const selectedFramings = [partyIssues[relation.from]?.framingId, partyIssues[relation.to]?.framingId]
        .map((framingId) => framings.find((framing) => framing.id === framingId))
        .filter((framing) => framing?.issueId === relation.from || framing?.issueId === relation.to)
        .filter(Boolean);
    return selectedFramings.some((framing) => {
        if (framing.resolvesRelations?.includes(relationKey(relation))) {
            return true;
        }
        return Boolean(framing.resolvesRelationTypes?.includes(relation.type) &&
            (framing.legibilityModifier >= 0.08 ||
                framing.controversyModifier <= -0.08 ||
                framing.swingAppealModifier >= 0.06 ||
                Object.values(framing.dimensionEffects ?? {}).some((value) => Math.abs(value) >= 0.05)));
    });
}
function relationKey(relation) {
    return `${relation.from}->${relation.to}`;
}
function addRelationNote(notes, relation, score, label) {
    if (Math.abs(score) < 0.025) {
        return;
    }
    notes.push({
        description: `${label}: ${relation.description}`,
        from: relation.from,
        score,
        to: relation.to,
        type: relation.type,
    });
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
function nextPendingId(items, currentId, resolvedIds) {
    const index = items.findIndex((item) => item.id === currentId);
    if (index < 0 || items.length === 0) {
        return undefined;
    }
    return items.slice(index + 1).find((item) => !resolvedIds.includes(item.id))?.id;
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
