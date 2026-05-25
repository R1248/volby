# Earned Media Mechanics

Earned media is an external opportunity layer, separate from paid campaign actions.
The player does not buy these appearances. The world offers invitations and the
player chooses whether to decline or send a representative.

Core files:

- `src/data/mediaOutlets.ts`: fictional media outlets, fallback voter clusters,
  invitation templates and audience/trust matrices.
- `src/game/mediaEngine.ts`: weekly invitation generation and appearance scoring.
- `src/game/types.ts`: shared media, speaker, cluster and result types.
- `app/media.tsx` and `src/components/media/MediaInvitationCard.tsx`: MVP UI.

Simulation shape:

1. `generateWeeklyMediaInvitations(gameState)` selects 1-3 templates for the
   current week. Issue salience, outlet affinity and party momentum affect the
   score.
2. `respondToMediaAppearance(gameState, decision)` resolves a decision through
   `resolveMediaAppearance(decision, gameState)`.
3. Results create temporary `mediaClusterModifiers`. The support engine applies
   those modifiers to voter particles by affinity to the fallback clusters.
4. Results also adjust issue salience, party momentum, reputation, fatigue and
   controversy/scandal risk.

The fallback clusters are deliberately replaceable. A later data layer can swap
them for model-derived clusters as long as it preserves `VoterCluster` fields:
demographics, regional distribution, mean 7D ideology, issue sensitivity and
media consumption/trust.

Mini-games are not implemented here. Invitations already carry `miniGameType`,
and decisions can pass `miniGameResult.performanceMultiplier` when a future UI
or timed debate module provides one.

