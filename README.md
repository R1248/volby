# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# Campaign Actions v2

`src/game/campaignActionsV2.ts` defines the first structured action catalog for the Volby strategy simulation. Each `CampaignActionV2` has a category, legality band, costs, target scope, subsystem effects, risk vector, and player-facing preview metadata.

Actions are intentionally not direct popularity buttons. The central helper in `src/game/actionEngine.ts` applies budget, staff, leader time, fatigue, field position, issue-layer changes, reputation, organization, information quality, coalition relations, scandal risk, media vulnerability, legal exposure, and prepared turnout modifiers. The weekly resolver now tries this helper first and falls back to legacy actions only when no v2 mapping exists.

Legality bands:

- `clean`: ordinary campaign mechanics with low legal exposure.
- `gray`: abstract high-risk mechanics with backlash, legal/media exposure, coalition toxicity, and counter-mobilization risk.
- `illegal`: black-ops abstractions only. They are deliberately non-operational and are modeled through detection, scandal, legal exposure, integrity loss, and coalition damage.

Turnout is prepared but not fully migrated. `CampaignActionV2` stores turnout and demobilization modifiers separately, and `preparedTurnoutProbability` documents the target formula. The current election engine still keeps the legacy abstention denominator for compatibility until the turnout/choice split is tested end to end.
