"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speakerRoleProfiles = exports.mediaFormatProfiles = void 0;
exports.calculatePartyOutletFit = calculatePartyOutletFit;
exports.generateWeeklyMediaInvitations = generateWeeklyMediaInvitations;
exports.resolveMediaAppearance = resolveMediaAppearance;
exports.mediaSentimentFromResult = mediaSentimentFromResult;
exports.selectMediaMiniGameQuestions = selectMediaMiniGameQuestions;
exports.scoreMediaMiniGameAnswers = scoreMediaMiniGameAnswers;
const mediaOutlets_1 = require("../data/mediaOutlets");
const mediaMiniGameQuestions_1 = require("../data/mediaMiniGameQuestions");
const supportScale = 0.08;
const latentDimensions = ['econ', 'culture', 'authority', 'establishment', 'globalism', 'green', 'ukraine'];
exports.mediaFormatProfiles = {
    interview: { name: 'Rozhovor', impactMultiplier: 1, riskMultiplier: 0.85, salienceMultiplier: 0.8 },
    debate: { name: 'Debata', impactMultiplier: 1.35, riskMultiplier: 1.35, salienceMultiplier: 1.3 },
    duel: { name: 'Duel', impactMultiplier: 1.25, riskMultiplier: 1.45, salienceMultiplier: 1.15 },
    podcast: { name: 'Podcast', impactMultiplier: 0.85, riskMultiplier: 0.8, salienceMultiplier: 0.75 },
    regional: { name: 'Regionalni rozhovor', impactMultiplier: 0.75, riskMultiplier: 0.65, salienceMultiplier: 0.65 },
    expertPanel: { name: 'Expertni panel', impactMultiplier: 0.65, riskMultiplier: 0.45, salienceMultiplier: 0.55 },
    influencer: { name: 'Influencer rozhovor', impactMultiplier: 1.05, riskMultiplier: 1.2, salienceMultiplier: 0.9 },
    crisisInterview: { name: 'Krizovy rozhovor', impactMultiplier: 1.1, riskMultiplier: 1.6, salienceMultiplier: 1.4 },
};
exports.speakerRoleProfiles = {
    leader: {
        name: 'Predseda',
        reachMultiplier: 1.18,
        riskMultiplier: 1.15,
        competenceMultiplier: 1,
        authenticityByFormat: { debate: 1.1, duel: 1.1, interview: 1, podcast: 0.95, regional: 0.9, expertPanel: 0.85, influencer: 0.8, crisisInterview: 1.05 },
    },
    expert: {
        name: 'Expert',
        reachMultiplier: 0.82,
        riskMultiplier: 0.78,
        competenceMultiplier: 1.25,
        authenticityByFormat: { debate: 0.9, duel: 0.85, interview: 1.05, podcast: 1.1, regional: 0.95, expertPanel: 1.25, influencer: 0.75, crisisInterview: 0.8 },
    },
    regionalFigure: {
        name: 'Regionalni tvar',
        reachMultiplier: 0.72,
        riskMultiplier: 0.82,
        competenceMultiplier: 0.95,
        authenticityByFormat: { debate: 0.75, duel: 0.75, interview: 0.9, podcast: 0.85, regional: 1.25, expertPanel: 0.8, influencer: 0.85, crisisInterview: 0.75 },
    },
    controversialFigure: {
        name: 'Kontroverzni tvar',
        reachMultiplier: 1.05,
        riskMultiplier: 1.45,
        competenceMultiplier: 0.85,
        authenticityByFormat: { debate: 0.95, duel: 1.15, interview: 1, podcast: 1.15, regional: 0.85, expertPanel: 0.65, influencer: 1.05, crisisInterview: 0.9 },
    },
    newFace: {
        name: 'Nova tvar',
        reachMultiplier: 0.75,
        riskMultiplier: 1.05,
        competenceMultiplier: 0.9,
        authenticityByFormat: { debate: 0.75, duel: 0.7, interview: 0.95, podcast: 1, regional: 0.9, expertPanel: 0.75, influencer: 1.2, crisisInterview: 0.65 },
    },
};
function calculatePartyOutletFit(state, outlet, partyId) {
    const party = state.partyRuntime[partyId];
    const center = party?.field.center8D;
    if (!party || !center) {
        const defaults = outletRiskDefaults(outlet);
        return {
            antiSystemFit: round4(defaults.antiSystemFit * 0.4),
            baseAlienationRisk: round4((1 - defaults.mainstreamLegitimacy * 0.7) * 0.25),
            baseFit: round4(0.5),
            ideologicalFit: round4(0.5),
            mainstreamFit: round4(defaults.mainstreamLegitimacy * 0.5),
            mismatchRisk: round4(0.35),
            scandalRisk: round4(clamp(defaults.toxicity * 0.62 + defaults.institutionalTaboo * 0.34, 0, 1)),
            toxicityRisk: round4(defaults.toxicity),
        };
    }
    const defaults = outletRiskDefaults(outlet);
    const outletVector = outletLatentVector(outlet);
    const editorialFit = latentFit(center, outletVector, party.field.salience8D);
    const audienceVector = outletAudienceVector(outlet);
    const audienceIdeologicalFit = audienceVector ? latentFit(center, audienceVector, party.field.salience8D) : editorialFit;
    const ideologicalFit = clamp(editorialFit * 0.58 + audienceIdeologicalFit * 0.42, 0, 1);
    const antiSystemParty = clamp((-center.establishment * 0.5 - center.globalism * 0.25 + center.authority * 0.15 + center.culture * 0.1 + 0.55) / 1.45, 0, 1);
    const progressiveParty = clamp((-center.culture * 0.28 - center.authority * 0.22 + center.green * 0.24 + center.globalism * 0.2 + center.ukraine * 0.14 + 0.55) / 1.65, 0, 1);
    const nationalConservativeParty = clamp((center.culture * 0.3 + center.authority * 0.25 - center.globalism * 0.2 - center.green * 0.12 - center.establishment * 0.08 + 0.55) / 1.5, 0, 1);
    const partyMainstream = clamp((center.establishment * 0.45 + center.globalism * 0.16 + center.ukraine * 0.18 + party.reputation.trust * 0.26 + party.reputation.integrity * 0.18 + 0.28) / 1.45, 0, 1);
    const styleFit = clamp(defaults.antiSystemFit * antiSystemParty +
        defaults.progressiveFit * progressiveParty +
        defaults.nationalConservativeFit * nationalConservativeParty +
        defaults.mainstreamLegitimacy * partyMainstream * 0.7, 0, 1);
    const ideologicalAndStyleFit = clamp(ideologicalFit * 0.62 + styleFit * 0.38, 0, 1);
    const baseFit = calculateBaseFit(state, outlet, ideologicalAndStyleFit, center, party.field.salience8D, defaults);
    const mainstreamFit = clamp(defaults.mainstreamLegitimacy * (0.45 + partyMainstream * 0.55), 0, 1);
    const antiSystemFit = clamp(defaults.antiSystemFit * (0.35 + antiSystemParty * 0.65), 0, 1);
    const toxicityRisk = defaults.toxicity;
    const tabooRisk = defaults.institutionalTaboo;
    const ideologicalMismatch = 1 - ideologicalAndStyleFit;
    const baseAlienationRisk = clamp((1 - baseFit) * (0.55 + ideologicalMismatch * 0.45) * (1 - defaults.mainstreamLegitimacy * 0.7), 0, 1);
    const mismatchRisk = clamp(ideologicalMismatch * 0.45 + (1 - baseFit) * 0.28 + Math.max(0, defaults.controversy - 0.45) * 0.18 + toxicityRisk * 0.12, 0, 1);
    const scandalRisk = clamp(toxicityRisk * 0.58 +
        tabooRisk * 0.34 +
        Math.max(0, defaults.controversy - 0.72) * 0.08 +
        Math.max(0, 0.35 - defaults.credibility) * 0.12 -
        Math.max(0, baseFit - 0.62) * 0.08, 0, 1);
    return {
        antiSystemFit: round4(antiSystemFit),
        baseAlienationRisk: round4(baseAlienationRisk),
        baseFit: round4(baseFit),
        ideologicalFit: round4(ideologicalAndStyleFit),
        mainstreamFit: round4(mainstreamFit),
        mismatchRisk: round4(mismatchRisk),
        scandalRisk: round4(scandalRisk),
        toxicityRisk: round4(toxicityRisk),
    };
}
function generateWeeklyMediaInvitations(state, rngSeed = state.rngSeed) {
    const existingIds = new Set(state.mediaInvitations.filter((invitation) => invitation.week === state.week).map((invitation) => invitation.id));
    const count = 1 + Math.floor(randomFromSeed(rngSeed + state.week * 97) * 3);
    const playerMomentum = state.partyRuntime.player.momentum ?? state.partyRuntime.player.field.amplitude ?? 1;
    return mediaOutlets_1.mediaInvitationTemplates
        .map((template, index) => {
        const outlet = findOutlet(template.outletId, state.media);
        const salience = currentIssueSalience(state, template.topicId);
        const outletAffinity = outlet?.topicAffinity?.[template.topicId] ?? 0.35;
        const momentumFit = 0.85 + Math.min(0.35, Math.max(0, playerMomentum - 0.9) * 0.25);
        const roll = randomFromSeed(rngSeed + state.week * 131 + index * 19);
        return {
            score: roll * 0.42 + salience * 0.34 + outletAffinity * 0.16 + momentumFit * 0.08,
            template,
        };
    })
        .sort((a, b) => b.score - a.score)
        .slice(0, count)
        .map(({ template }) => toInvitation(template, state.week))
        .filter((invitation) => !existingIds.has(invitation.id));
}
function resolveMediaAppearance(decision, state) {
    const invitation = state.mediaInvitations.find((item) => item.id === decision.invitationId);
    if (!invitation) {
        return emptyResult(decision.invitationId, 'Pozvanka uz neni dostupna.');
    }
    const outlet = findOutlet(invitation.outletId, state.media);
    if (!outlet) {
        return emptyResult(invitation.id, 'Medium neni v katalogu.');
    }
    if (decision.action === 'decline') {
        return declineMediaResult(invitation, outlet);
    }
    const format = normalizeFormat(invitation.format);
    const speakerRole = decision.speakerRole ?? invitation.recommendedSpeakerRoles?.[0] ?? 'leader';
    const formatProfile = exports.mediaFormatProfiles[format];
    const speakerProfile = exports.speakerRoleProfiles[speakerRole];
    const preparationMultiplier = preparationImpact(decision.preparationLevel, invitation.requiredPreparation ?? 0.5);
    const performanceMultiplier = decision.miniGameResult?.performanceMultiplier ??
        clamp(0.94 + preparationMultiplier * 0.08 - state.partyRuntime.player.leader.fatigue * (speakerRole === 'leader' ? 0.08 : 0.02), 0.7, 1.18);
    const speakerFitMultiplier = speakerProfile.authenticityByFormat[format] * (invitation.recommendedSpeakerRoles?.includes(speakerRole) ? 1.08 : 0.88);
    const credibilityMultiplier = 0.65 + outlet.credibility * 0.7;
    const expectedReach = (invitation.expectedReach ?? outlet.baseReach ?? outlet.reach) * speakerProfile.reachMultiplier;
    const topicId = invitation.issueId ?? programTopicFromLegacy(invitation.issue);
    const topicAffinityMultiplier = 0.85 + (outlet.topicAffinity?.[topicId] ?? 0.45) * 0.3;
    const partyOutletFit = calculatePartyOutletFit(state, outlet, state.playerPartyId ?? 'player');
    const clusterImpacts = mediaOutlets_1.voterClusters.map((cluster) => {
        const audienceByCluster = outlet.audienceByCluster;
        const audienceMix = outlet.audienceMix;
        const trustByCluster = outlet.trustByCluster;
        const issueSensitivity = cluster.issueSensitivity;
        const audienceShare = audienceByCluster?.[cluster.id] ?? audienceMix?.[cluster.id] ?? 0;
        const trust = trustByCluster?.[cluster.id] ?? 0.45;
        const topicRelevance = issueSensitivity[topicId] ?? fallbackTopicRelevance(topicId, cluster);
        const controversyPenalty = controversyPenaltyForCluster(outlet, cluster, trust, speakerRole, format, decision.preparationLevel, audienceShare, expectedReach, partyOutletFit);
        const impact = expectedReach *
            audienceShare *
            trust *
            formatProfile.impactMultiplier *
            speakerFitMultiplier *
            preparationMultiplier *
            performanceMultiplier *
            topicAffinityMultiplier *
            topicRelevance *
            credibilityMultiplier -
            controversyPenalty;
        return {
            audienceShare,
            clusterId: cluster.id,
            controversyPenalty: round4(controversyPenalty),
            impact: round4(impact),
            supportDelta: round4(impact * supportScale),
            topicRelevance,
            trust,
        };
    });
    const weightedImpact = clusterImpacts.reduce((sum, impact) => {
        const cluster = mediaOutlets_1.voterClusters.find((item) => item.id === impact.clusterId);
        return sum + impact.supportDelta * (cluster?.size ?? 0);
    }, 0);
    const positiveImpact = clusterImpacts.reduce((sum, impact) => sum + Math.max(0, impact.supportDelta), 0);
    const negativeImpact = clusterImpacts.reduce((sum, impact) => sum + Math.min(0, impact.supportDelta), 0);
    const riskScore = clamp(effectiveRisk(invitation, outlet, speakerRole, format, decision.preparationLevel, performanceMultiplier) +
        (decision.miniGameResult?.controversyAdjustment ?? 0), 0, 1);
    const controversyTriggered = riskScore > 0.72;
    const successScore = clamp(0.5 +
        weightedImpact * 18 +
        positiveImpact * 0.8 +
        negativeImpact * 1.4 +
        ((decision.miniGameResult?.successScore ?? 0.5) - 0.5) * 0.18 -
        (controversyTriggered ? 0.18 : 0), 0, 1);
    const miniGameQuality = decision.miniGameResult?.answerQualityScore;
    const miniGameSuccess = decision.miniGameResult?.successScore;
    const sentimentScore = clamp(miniGameQuality === undefined
        ? miniGameSuccess === undefined
            ? successScore
            : successScore * 0.75 + miniGameSuccess * 0.25
        : miniGameQuality * 0.55 + (miniGameSuccess ?? 0.5) * 0.25 + successScore * 0.2 - Math.max(0, decision.miniGameResult?.controversyAdjustment ?? 0) * 0.8, 0, 1);
    const issueSalienceDelta = {
        [topicId]: round4(0.12 * formatProfile.salienceMultiplier * (invitation.expectedReach ?? outlet.reach) * (controversyTriggered ? 1.3 : 1)),
    };
    return {
        clusterImpacts,
        controversyTriggered,
        invitationId: invitation.id,
        issueSalienceDelta,
        miniGameAnswerQualityScore: decision.miniGameResult?.answerQualityScore,
        miniGameCompetenceAdjustment: decision.miniGameResult?.competenceAdjustment,
        miniGameConsistencyAdjustment: decision.miniGameResult?.consistencyAdjustment,
        miniGameFiscalCredibilityScore: decision.miniGameResult?.fiscalCredibilityScore,
        mediaRiskWarnings: {
            baseAlienation: partyOutletFit.baseAlienationRisk > 0.35,
            mismatch: partyOutletFit.mismatchRisk > 0.48,
            toxicScandal: partyOutletFit.scandalRisk > 0.62,
        },
        partyOutletFit,
        partyMomentumDelta: round4(weightedImpact * 6 - (controversyTriggered ? 0.025 : 0)),
        programEffects: decision.miniGameResult?.impliedProgramEffects ?? [],
        reputationDelta: reputationDeltaFor(speakerRole, successScore, controversyTriggered, speakerProfile.competenceMultiplier),
        sentimentScore: round4(sentimentScore),
        successScore: round4(successScore),
        summary: `${outlet.name}: ${exports.speakerRoleProfiles[speakerRole].name} v formatu ${formatProfile.name} ${successScore >= 0.55 ? 'posilil medialni vykon' : 'mel omezeny efekt'}${controversyTriggered ? ' a vyvolal kontroverzi' : ''}.`,
    };
}
function mediaSentimentFromResult(result) {
    if (result.sentimentStatus === 'declined') {
        return {
            label: 'Odmítnuto',
            rating: result.sentimentRating,
            summary: result.sentimentSummary ?? 'Pozvanka byla odmitnuta; realny dopad se projevi az v tydennim vyhodnoceni.',
        };
    }
    const adjusted = (result.sentimentScore ?? result.successScore) - (result.controversyTriggered ? 0.12 : 0);
    const rating = adjusted < 0.25 ? 1 : adjusted < 0.43 ? 2 : adjusted < 0.58 ? 3 : adjusted < 0.76 ? 4 : 5;
    const labels = {
        1: 'Průšvih',
        2: 'Slabé',
        3: 'Smíšené',
        4: 'Dobré',
        5: 'Výborné',
    };
    const summaries = {
        1: 'Vystup pusobi jako viditelne nezvladnuty a bude potrebovat korekci.',
        2: 'Odezva je slaba, bez jasneho zisku a s rizikem dozvuku.',
        3: 'Odezva je smisena: cast publika slysi sdeleni, cast vidi slabiny.',
        4: 'Vystup pusobi dobre a pravdepodobne posili citelnost kampane.',
        5: 'Vystup ma vybornou odezvu a vyrazne zvedl medialni dojem.',
    };
    return {
        label: labels[rating],
        rating,
        summary: summaries[rating],
    };
}
function selectMediaMiniGameQuestions(invitation, outlet, state) {
    const miniGameType = invitation.miniGameType;
    if (!miniGameType) {
        return [];
    }
    const format = normalizeFormat(invitation.format);
    const topicId = invitation.issueId ?? programTopicFromLegacy(invitation.issue);
    const risk = Math.max(invitation.risk, outlet.scrutiny * 0.7, outlet.sensationalism * 0.6);
    const preferredSeverities = miniGameType === 'hostile_interview'
        ? ['hostile', 'hard']
        : miniGameType === 'three_questions_timed'
            ? risk > 0.58
                ? ['hostile', 'hard', 'normal']
                : ['hard', 'normal']
            : miniGameType === 'informal_qna' || miniGameType === 'soundbite_builder'
                ? ['soft', 'normal']
                : miniGameType === 'long_form'
                    ? ['normal', 'soft', 'hard']
                    : ['normal', 'soft'];
    const count = miniGameType === 'long_form'
        ? 4
        : miniGameType === 'short_interview'
            ? risk > 0.52
                ? 3
                : 2
            : 3;
    const shouldBeTimed = miniGameType === 'three_questions_timed' || miniGameType === 'hostile_interview';
    const pool = mediaMiniGameQuestions_1.mediaMiniGameQuestions
        .filter((question) => question.topicId === topicId || question.isGenericFallback)
        .filter((question) => question.miniGameTypes.includes(miniGameType) || question.formats.includes(format))
        .sort((a, b) => Number(Boolean(a.isGenericFallback)) - Number(Boolean(b.isGenericFallback)) || severityRank(preferredSeverities, a.severity) - severityRank(preferredSeverities, b.severity));
    const selected = uniqueQuestions(pool, count);
    return selected.map((question, index) => ({
        ...question,
        prompt: question.isGenericFallback ? `${question.prompt} (${issueName(state, topicId)})` : question.prompt,
        topicId: question.isGenericFallback ? topicId : question.topicId,
        timeLimitSec: shouldBeTimed
            ? clamp(Math.round((miniGameType === 'hostile_interview' ? 8 : 10) + index * 2 + Math.max(0, 0.7 - risk) * 4), 8, miniGameType === 'hostile_interview' ? 15 : 18)
            : miniGameType === 'short_interview' && risk > 0.58
                ? 20
                : undefined,
    }));
}
function scoreMediaMiniGameAnswers(answers, questions, context) {
    if (questions.length === 0) {
        return { performanceMultiplier: 1, successScore: 0.5, controversyAdjustment: 0 };
    }
    let performance = 0;
    let controversy = 0;
    let programAlignment = 0;
    let programMismatch = 0;
    let fiscalCredibility = 0;
    let competence = 0;
    let consistency = 0;
    let answerQuality = 0;
    const impliedProgramEffects = [];
    for (let index = 0; index < questions.length; index += 1) {
        const question = questions[index];
        const answer = answers[index] ?? vagueAnswer(question);
        const answerScore = scoreAnswerInContext(answer, question, context);
        const optionScores = [...question.options, ...(question.options.some((option) => option.id === answer.id) ? [] : [answer])].map((option) => scoreAnswerInContext(option, question, context).score);
        const minOptionScore = Math.min(...optionScores);
        const maxOptionScore = Math.max(...optionScores);
        const normalizedAnswerQuality = maxOptionScore - minOptionScore < 0.0001 ? 0.5 : clamp((answerScore.score - minOptionScore) / (maxOptionScore - minOptionScore), 0, 1);
        const speakerFit = answer.bestForSpeakerRoles?.includes(context.speakerRole ?? 'leader') ? 0.025 : 0;
        const positionFit = answerPositionFit(answer, question.topicId, context.state);
        const outletRiskPenalty = (answer.tone === 'aggressive' ? context.outlet.sensationalism * 0.035 : 0) + (answer.tone === 'vague' || answer.tone === 'evasive' ? context.outlet.scrutiny * 0.025 : 0);
        const commitment = evaluateProgramCommitment(answer, question, context);
        const tradeoffAdjustment = evaluateTradeoffAnswer(answer, question, context);
        const axisAdjustment = evaluateAxisFit(answer, context.state);
        const directPositionQuestion = question.options.some((option) => option.impliedIssuePosition);
        const evasivePenalty = directPositionQuestion && (answer.answerType === 'pivot' || answer.tone === 'evasive') ? 0.045 : 0;
        const fiscalAdjustment = (answer.fiscalCredibilityDelta ?? 0) * (question.questionKind === 'budget_constraint' || question.questionKind === 'coherence_trap' ? 0.8 : 0.45);
        const competenceAdjustment = (answer.competenceDelta ?? 0) * 0.75;
        const consistencyAdjustment = (answer.consistencyDelta ?? 0) * 0.65;
        const qualityAdjustment = (normalizedAnswerQuality - 0.5) * (question.questionKind === 'factual_check' ? 0.11 : 0.07);
        performance +=
            answer.performanceDelta +
                speakerFit +
                positionFit +
                commitment.performanceAdjustment +
                tradeoffAdjustment +
                axisAdjustment +
                fiscalAdjustment +
                competenceAdjustment +
                consistencyAdjustment +
                qualityAdjustment -
                outletRiskPenalty -
                evasivePenalty;
        controversy += (answer.controversyDelta ?? 0) + (answer.tone === 'aggressive' ? 0.02 : 0) - (answer.tone === 'empathetic' ? 0.01 : 0);
        programAlignment += commitment.alignmentScore;
        programMismatch += commitment.mismatchPenalty;
        fiscalCredibility += answer.fiscalCredibilityDelta ?? 0;
        competence += (answer.competenceDelta ?? 0) + answerScore.factualComponent * 0.05;
        consistency += answer.consistencyDelta ?? 0;
        answerQuality += normalizedAnswerQuality;
        impliedProgramEffects.push(...commitment.effects);
    }
    const averagePerformance = performance / Math.max(1, questions.length);
    const averageControversy = controversy / Math.max(1, questions.length);
    return {
        answerQualityScore: round4(answerQuality / Math.max(1, questions.length)),
        competenceAdjustment: round4(competence / Math.max(1, questions.length)),
        consistencyAdjustment: round4(consistency / Math.max(1, questions.length)),
        controversyAdjustment: round4(clamp(averageControversy, -0.06, 0.1)),
        fiscalCredibilityScore: round4(fiscalCredibility / Math.max(1, questions.length)),
        impliedProgramEffects,
        performanceMultiplier: round4(clamp(1 + averagePerformance, 0.75, 1.2)),
        programAlignmentScore: round4(programAlignment / Math.max(1, questions.length)),
        programMismatchPenalty: round4(programMismatch),
        successScore: round4(clamp(0.5 + averagePerformance * 1.6 - Math.max(0, averageControversy) * 0.5, 0, 1)),
    };
}
function declineMediaResult(invitation, outlet) {
    const reach = invitation.expectedReach ?? outlet.baseReach ?? outlet.reach;
    const isHighReachMainstream = reach >= 0.6 && (normalizeFormat(invitation.format) === 'debate' || normalizeFormat(invitation.format) === 'duel') && (outlet.controversy ?? 0) < 0.5;
    const isToxic = (outlet.controversy ?? 0) >= 0.7 || outlet.sensationalism >= 0.78 || outlet.credibility < 0.4;
    if (isToxic) {
        return {
            clusterImpacts: [],
            controversyTriggered: false,
            invitationId: invitation.id,
            issueSalienceDelta: {},
            partyMomentumDelta: 0,
            reputationDelta: { authenticity: 0.002, controversy: -0.002, trust: 0.001 },
            sentimentLabel: 'Odmítnuto',
            sentimentStatus: 'declined',
            sentimentSummary: `${outlet.name}: odmitnuti je obhajitelne, protoze medium nese vysoke reputacni riziko.`,
            successScore: 0.52,
            summary: `${outlet.name}: pozvanka odmitnuta kvuli reputacnimu riziku kanalu.`,
        };
    }
    if (isHighReachMainstream) {
        return {
            clusterImpacts: [],
            controversyTriggered: false,
            invitationId: invitation.id,
            issueSalienceDelta: {},
            partyMomentumDelta: -0.018,
            reputationDelta: { authenticity: -0.008, competence: -0.004, trust: -0.007 },
            sentimentLabel: 'Odmítnuto',
            sentimentStatus: 'declined',
            sentimentSummary: `${outlet.name}: odmitnuti vysokeho dosahu muze pusobit jako vyhybani se verejne kontrole.`,
            successScore: 0.32,
            summary: `${outlet.name}: odmitnuti hlavni debaty vytvari reputacni riziko.`,
        };
    }
    return {
        clusterImpacts: [],
        controversyTriggered: false,
        invitationId: invitation.id,
        issueSalienceDelta: {},
        partyMomentumDelta: reach < 0.3 ? -0.001 : -0.004,
        reputationDelta: reach < 0.3 ? {} : { authenticity: -0.002, trust: -0.002 },
        sentimentLabel: 'Odmítnuto',
        sentimentStatus: 'declined',
        sentimentSummary: `${outlet.name}: odmitnuti ma nizky az mirny dopad podle dosahu pozvanky.`,
        successScore: reach < 0.3 ? 0.5 : 0.44,
        summary: `${outlet.name}: pozvanka odmitnuta s omezenym dopadem.`,
    };
}
function severityRank(preferred, severity) {
    const index = preferred.indexOf(severity);
    return index >= 0 ? index : preferred.length + 1;
}
function uniqueQuestions(questions, count) {
    const seen = new Set();
    const selected = [];
    for (const question of questions) {
        if (seen.has(question.id)) {
            continue;
        }
        seen.add(question.id);
        selected.push(question);
        if (selected.length >= count) {
            break;
        }
    }
    if (selected.length >= count) {
        return selected;
    }
    return selected;
}
function scoreAnswerInContext(answer, question, context) {
    const factualComponent = question.questionKind === 'factual_check' ? clamp(((answer.factualScore ?? 0.45) - 0.5) * 2, -1, 1) : 0;
    const programFitComponent = programFitScore(answer, context.state);
    const tradeoffComponent = tradeoffScore(answer, question, context);
    const rhetoricComponent = clamp(answer.performanceDelta * 5, -0.5, 0.5) +
        (answer.bestForSpeakerRoles?.includes(context.speakerRole ?? 'leader') ? 0.12 : 0) +
        (answer.tone === 'specific' || answer.tone === 'technical' ? 0.12 : answer.tone === 'empathetic' ? 0.08 : answer.tone === 'vague' || answer.tone === 'evasive' ? -0.18 : 0);
    const riskComponent = (answer.controversyDelta ?? 0) * 2 +
        (answer.tone === 'aggressive' ? context.outlet.sensationalism * 0.25 : 0) +
        (answer.tone === 'vague' || answer.tone === 'evasive' ? context.outlet.scrutiny * 0.18 : 0);
    const kind = question.questionKind ?? 'rhetorical_explanation';
    const score = kind === 'factual_check'
        ? factualComponent * 0.72 + rhetoricComponent * 0.14 + tradeoffComponent * 0.08 - riskComponent * 0.16
        : kind === 'program_consistency_check'
            ? programFitComponent * 0.48 + tradeoffComponent * 0.14 + rhetoricComponent * 0.22 - riskComponent * 0.16
            : kind === 'budget_constraint' || kind === 'coherence_trap'
                ? tradeoffComponent * 0.48 + programFitComponent * 0.24 + rhetoricComponent * 0.16 - riskComponent * 0.16
                : kind === 'issue_position' || kind === 'axis_probe' || kind === 'distributional_tradeoff'
                    ? programFitComponent * 0.45 + tradeoffComponent * 0.22 + rhetoricComponent * 0.18 - riskComponent * 0.16
                    : rhetoricComponent * 0.45 + programFitComponent * 0.22 + tradeoffComponent * 0.14 - riskComponent * 0.16;
    return {
        factualComponent,
        programFitComponent,
        rhetoricComponent,
        riskComponent,
        score: clamp(score, -1, 1),
        tradeoffComponent,
    };
}
function programFitScore(answer, state) {
    let score = 0;
    let count = 0;
    for (const [issueId, impliedPosition] of Object.entries(answer.impliedIssuePosition ?? {})) {
        const current = state.issueLayer.player.currentIssuePositions[issueId];
        if (!current)
            continue;
        const distance = Math.abs(impliedPosition - current.position);
        score += clamp(1 - distance / 1.8, -1, 1) * (0.7 + current.salience * 0.08 + current.rigidity * 0.18);
        count += 1;
    }
    const axis = answer.impliedAxisPosition;
    const center = state.partyRuntime.player.field.center8D;
    if (center) {
        for (const [dimension, impliedPosition] of Object.entries(axis ?? {})) {
            const current = center[dimension];
            if (typeof current !== 'number')
                continue;
            score += clamp(1 - Math.abs(impliedPosition - current) / 1.8, -1, 1) * 0.6;
            count += 1;
        }
    }
    if (answer.answerType === 'pivot' || answer.tone === 'evasive') {
        score -= 0.25;
        count += 1;
    }
    return count === 0 ? 0 : clamp(score / count, -1, 1);
}
function tradeoffScore(answer, question, context) {
    const seriousQuestion = question.questionKind === 'budget_constraint' ||
        question.questionKind === 'coherence_trap' ||
        question.questionKind === 'distributional_tradeoff' ||
        question.questionKind === 'program_consistency_check';
    const seriousness = clamp(context.outlet.scrutiny * 0.6 + context.outlet.credibility * 0.25 + context.invitation.risk * 0.15, 0, 1);
    let score = 0;
    score += clamp((answer.fiscalCredibilityDelta ?? 0) * 8, -0.65, 0.65);
    score += clamp((answer.competenceDelta ?? 0) * 7, -0.45, 0.45);
    score += clamp((answer.consistencyDelta ?? 0) * 7, -0.45, 0.45);
    if ((answer.payerGroups?.length ?? 0) > 0)
        score += seriousQuestion ? 0.22 : 0.08;
    if ((answer.beneficiaryGroups?.length ?? 0) > 0)
        score += 0.08;
    if ((answer.payerGroups?.length ?? 0) > 0 && (answer.beneficiaryGroups?.length ?? 0) > 0)
        score += 0.12;
    if (seriousQuestion && (answer.tone === 'vague' || answer.tone === 'evasive' || answer.answerType === 'pivot')) {
        score -= 0.28 + seriousness * 0.25;
    }
    return clamp(score, -1, 1);
}
function evaluateTradeoffAnswer(answer, question, context) {
    if (question.questionKind !== 'budget_constraint' && question.questionKind !== 'coherence_trap') {
        return 0;
    }
    const seriousness = clamp(context.outlet.scrutiny * 0.75 + context.outlet.credibility * 0.25 + context.invitation.risk * 0.25, 0, 1.2);
    let adjustment = 0;
    if (answer.tone === 'vague' || answer.tone === 'evasive' || answer.answerType === 'pivot') {
        adjustment -= 0.025 + seriousness * 0.045;
    }
    if (answer.fiscalCredibilityDelta !== undefined && answer.fiscalCredibilityDelta < -0.04) {
        adjustment -= seriousness * 0.025;
    }
    if ((answer.payerGroups?.length ?? 0) > 0 || answer.fiscalCredibilityDelta !== undefined && answer.fiscalCredibilityDelta > 0) {
        adjustment += 0.012 + seriousness * 0.018;
    }
    if ((answer.beneficiaryGroups?.length ?? 0) > 0 && (answer.payerGroups?.length ?? 0) > 0) {
        adjustment += 0.01;
    }
    return adjustment;
}
function evaluateAxisFit(answer, state) {
    const impliedAxis = answer.impliedAxisPosition;
    const currentAxis = state.partyRuntime.player.field.center8D;
    if (!impliedAxis || !currentAxis) {
        return 0;
    }
    let adjustment = 0;
    let count = 0;
    for (const [axis, impliedPosition] of Object.entries(impliedAxis)) {
        const currentPosition = currentAxis[axis];
        if (typeof currentPosition !== 'number') {
            continue;
        }
        const distance = Math.abs(impliedPosition - currentPosition);
        adjustment += distance <= 0.55 ? 0.006 : -Math.min(0.026, distance * 0.012);
        count += 1;
    }
    return count === 0 ? 0 : adjustment / count;
}
function vagueAnswer(question) {
    return (question.options.find((answer) => answer.tone === 'vague' || answer.tone === 'evasive') ?? {
        id: 'timeout',
        label: 'Bez odpovedi',
        performanceDelta: -0.08,
        text: 'Bez konkretni odpovedi.',
        tone: 'vague',
    });
}
function evaluateProgramCommitment(answer, question, context) {
    const reach = context.invitation.expectedReach ?? context.outlet.baseReach ?? context.outlet.reach;
    const formatRisk = context.outlet.scrutiny * 0.7 + context.outlet.sensationalism * 0.3 + context.invitation.risk * 0.4;
    const effects = [];
    let alignmentScore = 0;
    let mismatchPenalty = 0;
    let performanceAdjustment = 0;
    for (const [issueId, impliedPosition] of Object.entries(answer.impliedIssuePosition ?? {})) {
        const current = context.state.issueLayer.player.currentIssuePositions[issueId];
        if (!current) {
            continue;
        }
        const commitmentStrength = clamp(answer.commitmentStrength ?? 0.45, 0, 1);
        const difference = Math.abs(impliedPosition - current.position);
        const exposure = commitmentStrength * reach * (0.45 + formatRisk * 0.55) * (0.55 + current.salience / 8) * (0.65 + current.rigidity * 0.55);
        const aligned = difference <= 0.65;
        const moderateMismatch = difference > 0.65 && difference <= 1.4;
        const mismatch = difference > 1.4;
        const issuePenalty = (moderateMismatch ? difference * 0.035 : mismatch ? difference * 0.075 : -0.018) * exposure + (answer.consistencyRisk ?? 0) * (mismatch ? 0.35 : moderateMismatch ? 0.16 : 0);
        if (aligned) {
            alignmentScore += 0.035 * exposure;
            performanceAdjustment += 0.018 * exposure;
        }
        else {
            mismatchPenalty += issuePenalty;
            performanceAdjustment -= issuePenalty;
        }
        if (answer.answerType !== 'pivot' && commitmentStrength >= 0.55 && reach >= 0.25) {
            effects.push({
                commitmentStrength,
                consistencyPenalty: Math.max(0, issuePenalty * 0.35),
                framingId: answer.impliedFramingId?.[issueId],
                impliedPosition,
                issueId,
                positionShift: clamp((impliedPosition - current.position) * commitmentStrength * reach * 0.15, -0.35, 0.35),
                salienceShift: clamp((answer.impliedIssueSalience?.[issueId] ?? (reach >= 0.55 ? 0.22 : 0.1)) * commitmentStrength, 0, 0.3),
                sourceInvitationId: context.invitation.id,
            });
        }
    }
    if (answer.answerType === 'pivot' || answer.tone === 'evasive') {
        performanceAdjustment -= 0.025 * (0.8 + context.outlet.scrutiny);
    }
    return {
        alignmentScore,
        effects,
        mismatchPenalty,
        performanceAdjustment,
    };
}
function answerPositionFit(answer, topicId, state) {
    const position = state.issueLayer.player.currentIssuePositions[topicId];
    if (!position) {
        return 0;
    }
    if (answer.tone === 'specific' || answer.tone === 'technical') {
        return Math.abs(position.position) >= 1 ? 0.012 : 0.004;
    }
    if (answer.tone === 'empathetic') {
        return position.salience >= 2 ? 0.01 : 0.003;
    }
    if (answer.tone === 'aggressive') {
        return position.rigidity > 0.55 ? 0.006 : -0.006;
    }
    return -0.008;
}
function issueName(state, issueId) {
    return state.issueLayer.issues.find((issue) => issue.id === issueId)?.shortName ?? issueId;
}
function toInvitation(template, week) {
    return {
        baseRisk: template.baseRisk,
        description: template.description,
        expectedReach: template.expectedReach,
        expiresInWeeks: template.expiresInWeeks,
        format: template.format,
        id: `${template.id}-w${week}`,
        issue: legacyIssueFromTopic(template.topicId),
        issueId: template.topicId,
        miniGameType: template.miniGameType,
        opponentPartyId: template.opponentPartyId,
        outletId: template.outletId,
        recommendedSpeakerRoles: [...template.recommendedSpeakerRoles],
        requiredPreparation: template.requiredPreparation,
        resolved: false,
        risk: template.baseRisk,
        title: template.title,
        week,
    };
}
function normalizeFormat(format) {
    if (format === 'panel')
        return 'expertPanel';
    if (format === 'press')
        return 'interview';
    if (format === 'school')
        return 'regional';
    return format;
}
function currentIssueSalience(state, issueId) {
    const current = state.issueLayer?.player?.currentIssuePositions?.[issueId];
    if (current)
        return clamp(current.salience / 4, 0, 1);
    const legacy = legacyIssueFromTopic(issueId);
    return state.regions.reduce((sum, region) => sum + (region.issueAgendaBase[legacy] ?? 0), 0) / Math.max(1, state.regions.length);
}
function fallbackTopicRelevance(issueId, cluster) {
    const direct = cluster.issueSensitivity[legacyIssueFromTopic(issueId)];
    if (direct !== undefined)
        return direct;
    const issueVector = issueToVector(issueId);
    const distance = Math.abs(cluster.ideologyMean.econ - issueVector.econ) +
        Math.abs(cluster.ideologyMean.culture - issueVector.culture) +
        Math.abs(cluster.ideologyMean.authority - issueVector.authority) +
        Math.abs(cluster.ideologyMean.establishment - issueVector.establishment) +
        Math.abs(cluster.ideologyMean.globalism - issueVector.globalism) +
        Math.abs(cluster.ideologyMean.green - issueVector.green) +
        Math.abs(cluster.ideologyMean.ukraine - issueVector.ukraine);
    return clamp(0.75 - distance / 9, 0.18, 0.75);
}
function issueToVector(issueId) {
    const defaults = { authority: 0, culture: 0, econ: 0, establishment: 0, globalism: 0, green: 0, ukraine: 0 };
    const map = {
        antiCorruption: { ...defaults, establishment: 0.45 },
        climate: { ...defaults, culture: -0.2, green: 0.8, globalism: 0.25 },
        education: { ...defaults, culture: -0.25, establishment: 0.15 },
        energyPrices: { ...defaults, econ: -0.3, establishment: -0.1 },
        healthcare: { ...defaults, econ: -0.45 },
        housing: { ...defaults, econ: -0.45, establishment: 0.12 },
        lawAndOrder: { ...defaults, authority: 0.7, culture: 0.2 },
        migration: { ...defaults, authority: 0.5, culture: 0.65, globalism: -0.5 },
        nationalSovereignty: { ...defaults, culture: 0.35, establishment: -0.25, globalism: -0.85 },
        taxes: { ...defaults, econ: 0.75 },
    };
    return map[issueId] ?? defaults;
}
function preparationImpact(level, required) {
    const value = level === 'strong' ? 0.9 : level === 'basic' ? 0.55 : 0.2;
    return clamp(0.86 + value * 0.28 - Math.max(0, required - value) * 0.22, 0.72, 1.15);
}
function outletRiskDefaults(outlet) {
    const controversy = outlet.controversy ?? outlet.sensationalism;
    const credibilityGap = Math.max(0, 0.55 - outlet.credibility);
    const isPublic = outlet.kind === 'public_tv';
    const mainstreamLegitimacy = outlet.mainstreamLegitimacy ?? clamp(isPublic ? 0.9 : outlet.credibility * 0.62 + (1 - outlet.sensationalism) * 0.18, 0.05, 0.95);
    return {
        antiSystemFit: outlet.antiSystemFit ?? clamp((outlet.audienceByCluster?.anti_establishment_online ?? 0) * 1.8 + Math.max(0, -outlet.editorialVector.econ) * 0.12 + controversy * 0.25, 0, 1),
        controversy,
        credibility: outlet.credibility,
        institutionalTaboo: outlet.institutionalTaboo ?? clamp(credibilityGap * 0.4 + Math.max(0, controversy - 0.62) * 0.35 + Math.max(0, outlet.sensationalism - 0.78) * 0.2, 0.02, 0.9),
        mainstreamLegitimacy,
        nationalConservativeFit: outlet.nationalConservativeFit ?? clamp((outlet.audienceByCluster?.rural_conservatives ?? 0) * 1.4 + (outlet.audienceByCluster?.working_class_protest ?? 0) * 0.55 + Math.max(0, outlet.editorialVector.culture) * 0.35, 0, 1),
        progressiveFit: outlet.progressiveFit ?? clamp((outlet.audienceByCluster?.young_urban_progressives ?? 0) * 1.45 + (outlet.audienceByCluster?.urban_liberal_professionals ?? 0) * 0.55 + Math.max(0, -outlet.editorialVector.culture) * 0.42, 0, 1),
        toxicity: outlet.toxicity ?? clamp(credibilityGap * 0.28 + Math.max(0, controversy - 0.58) * 0.42 + Math.max(0, outlet.sensationalism - 0.72) * 0.2, 0.03, 0.9),
    };
}
function outletLatentVector(outlet) {
    const defaults = outletRiskDefaults(outlet);
    return {
        authority: outlet.editorialVector.authority,
        culture: outlet.editorialVector.culture,
        econ: outlet.editorialVector.econ,
        establishment: clamp(defaults.mainstreamLegitimacy * 1.35 - defaults.antiSystemFit * 1.1 - defaults.institutionalTaboo * 0.35, -1, 1),
        globalism: clamp(defaults.progressiveFit * 0.55 + defaults.mainstreamLegitimacy * 0.25 - defaults.antiSystemFit * 0.7 - defaults.nationalConservativeFit * 0.45, -1, 1),
        green: clamp(defaults.progressiveFit * 0.8 - defaults.nationalConservativeFit * 0.35 - defaults.antiSystemFit * 0.25, -1, 1),
        ukraine: clamp(defaults.mainstreamLegitimacy * 0.55 + defaults.progressiveFit * 0.25 - defaults.antiSystemFit * 0.5 - defaults.institutionalTaboo * 0.35, -1, 1),
    };
}
function outletAudienceVector(outlet) {
    const audienceByCluster = outlet.audienceByCluster;
    if (!audienceByCluster) {
        return undefined;
    }
    const totals = Object.fromEntries(latentDimensions.map((dimension) => [dimension, 0]));
    let totalWeight = 0;
    for (const cluster of mediaOutlets_1.voterClusters) {
        const weight = audienceByCluster[cluster.id] ?? 0;
        if (weight <= 0) {
            continue;
        }
        totalWeight += weight;
        for (const dimension of latentDimensions) {
            totals[dimension] += cluster.ideologyMean[dimension] * weight;
        }
    }
    if (totalWeight <= 0) {
        return undefined;
    }
    for (const dimension of latentDimensions) {
        totals[dimension] = totals[dimension] / totalWeight;
    }
    return totals;
}
function calculateBaseFit(state, outlet, ideologicalFit, partyCenter, salience, defaults) {
    const trustByCluster = outlet.trustByCluster;
    const audienceByCluster = outlet.audienceByCluster;
    let weightedAcceptability = 0;
    let totalCoreWeight = 0;
    for (const cluster of mediaOutlets_1.voterClusters) {
        const coreFit = latentFit(partyCenter, cluster.ideologyMean, salience);
        const coreWeight = cluster.size * Math.pow(coreFit, 3.2);
        if (coreWeight <= 0.0001) {
            continue;
        }
        const trust = trustByCluster?.[cluster.id] ?? 0.42;
        const audienceShare = audienceByCluster?.[cluster.id] ?? 0;
        const clusterOutletFit = latentFit(cluster.ideologyMean, outletLatentVector(outlet));
        const institutionalAcceptance = defaults.mainstreamLegitimacy * (0.42 + Math.max(0, cluster.ideologyMean.establishment) * 0.28);
        const acceptability = clamp(trust * 0.34 +
            Math.min(1, audienceShare * 2.4) * 0.2 +
            clusterOutletFit * 0.24 +
            ideologicalFit * 0.1 +
            institutionalAcceptance * 0.22 -
            defaults.toxicity * 0.22 -
            defaults.institutionalTaboo * 0.16, 0, 1);
        weightedAcceptability += acceptability * coreWeight;
        totalCoreWeight += coreWeight;
    }
    if (totalCoreWeight <= 0) {
        return clamp(ideologicalFit * 0.7 + defaults.mainstreamLegitimacy * 0.3, 0, 1);
    }
    return clamp(weightedAcceptability / totalCoreWeight, 0, 1);
}
function latentFit(left, right, salience) {
    let weightedDistance = 0;
    let totalWeight = 0;
    for (const dimension of latentDimensions) {
        const weight = salience?.[dimension] ?? (dimension === 'econ' || dimension === 'culture' || dimension === 'authority' ? 1 : 0.85);
        weightedDistance += Math.abs((left[dimension] ?? 0) - (right[dimension] ?? 0)) * weight;
        totalWeight += weight;
    }
    return clamp(1 - weightedDistance / Math.max(0.001, totalWeight * 1.55), 0, 1);
}
function controversyPenaltyForCluster(outlet, cluster, trust, speakerRole, format, preparationLevel, audienceShare, expectedReach, fit) {
    const defaults = outletRiskDefaults(outlet);
    const controversy = defaults.controversy;
    const speakerRisk = speakerRole === 'controversialFigure' ? 0.18 : speakerRole === 'leader' ? 0.06 : 0;
    const prepRelief = preparationLevel === 'strong' ? 0.55 : preparationLevel === 'basic' ? 0.8 : 1;
    const baseControversyPenalty = Math.max(0, controversy - 0.34) * Math.max(0.05, 0.62 - trust) * exports.mediaFormatProfiles[format].riskMultiplier * prepRelief +
        speakerRisk * Math.max(0, 0.55 - trust);
    const establishmentSensitivity = clamp(cluster.ideologyMean.establishment * 0.7 + cluster.ideologyMean.globalism * 0.2 + cluster.ideologyMean.ukraine * 0.22 + 0.45, 0.05, 1);
    const toxicityBacklash = defaults.toxicity * (0.12 + establishmentSensitivity * 0.22) + defaults.institutionalTaboo * establishmentSensitivity * 0.14;
    const mainstreamRelief = 1 - defaults.mainstreamLegitimacy * 0.62;
    const publicSpillover = clamp((outlet.sensationalism * 0.08 + controversy * 0.06 + defaults.toxicity * 0.18 + defaults.institutionalTaboo * 0.12 + expectedReach * 0.06 + exports.mediaFormatProfiles[format].riskMultiplier * 0.035) *
        mainstreamRelief, 0.04, 0.3);
    const baseAlienationPenalty = fit.baseAlienationRisk * Math.max(0, latentFit(cluster.ideologyMean, outletLatentVector(outlet)) < 0.45 ? 0.018 : 0) * (1 - defaults.mainstreamLegitimacy * 0.7);
    return baseControversyPenalty * (0.45 + audienceShare * 0.55) + baseControversyPenalty * publicSpillover + toxicityBacklash * publicSpillover + baseAlienationPenalty;
}
function effectiveRisk(invitation, outlet, speakerRole, format, preparationLevel, performanceMultiplier) {
    const prepRisk = preparationLevel === 'strong' ? 0.72 : preparationLevel === 'basic' ? 0.9 : 1.12;
    return clamp((invitation.baseRisk ?? invitation.risk) *
        exports.mediaFormatProfiles[format].riskMultiplier *
        exports.speakerRoleProfiles[speakerRole].riskMultiplier *
        prepRisk *
        (1.08 - Math.min(1.05, performanceMultiplier) * 0.16) +
        (outlet.controversy ?? 0) * 0.15, 0, 1);
}
function reputationDeltaFor(speakerRole, successScore, controversyTriggered, competenceMultiplier) {
    const success = successScore - 0.5;
    return {
        authenticity: round4(success * (speakerRole === 'newFace' || speakerRole === 'regionalFigure' ? 0.04 : 0.02)),
        competence: round4(success * 0.035 * competenceMultiplier),
        controversy: round4((controversyTriggered ? 0.035 : 0) + (speakerRole === 'controversialFigure' ? 0.015 : 0)),
        trust: round4(success * 0.025 - (controversyTriggered ? 0.018 : 0)),
    };
}
function findOutlet(outletId, stateMedia) {
    return stateMedia.find((outlet) => outlet.id === outletId) ?? mediaOutlets_1.mediaOutlets.find((outlet) => outlet.id === outletId);
}
function legacyIssueFromTopic(issueId) {
    const map = {
        climate: 'climate',
        coalPhaseout: 'climate',
        education: 'education',
        energyPrices: 'industry',
        greenDeal: 'greenDeal',
        healthcare: 'healthcare',
        housing: 'housing',
        lawAndOrder: 'security',
        migration: 'security',
        nationalSovereignty: 'security',
        pensions: 'healthcare',
        regulation: 'taxes',
        taxes: 'taxes',
        transport: 'transport',
        ukraineSupport: 'security',
    };
    return map[issueId] ?? 'taxes';
}
function programTopicFromLegacy(issueId) {
    const map = {
        climate: 'greenDeal',
        education: 'civilServiceReform',
        greenDeal: 'greenDeal',
        healthcare: 'pensions',
        housing: 'housing',
        industry: 'energyPrices',
        security: 'lawAndOrder',
        taxes: 'taxes',
        transport: 'housing',
    };
    return map[issueId] ?? 'taxes';
}
function emptyResult(invitationId, summary) {
    return {
        clusterImpacts: [],
        controversyTriggered: false,
        invitationId,
        issueSalienceDelta: {},
        partyMomentumDelta: 0,
        successScore: 0,
        summary,
    };
}
function randomFromSeed(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function round4(value) {
    return Math.round(value * 10000) / 10000;
}
