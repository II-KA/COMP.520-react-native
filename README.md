# COMP.520 React Native App

React Native app for the course COMP.520, Tampere University.

## Local setup

First, follow the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) for the relevant environment up to (but not including) "Creating a new application".

Second, install JavaScript dependencies and start the bundler.

```sh
npm install
npm start
```

Next, the application may be started on iOS or Android.

### Android

```sh
npm run android
```

To run a React Native Android app, an Android device (virtual or physical) is required. See [Preparing the Android device](https://reactnative.dev/docs/environment-setup) for further information.

### iOS

```sh
npx pod-install
npm run ios
```

## Native Logs

To access the console logs, use the following command in a terminal while the app is running:

```sh
# For Android:
npx react-native log-android
# Or, for iOS:
npx react-native log-ios
```
