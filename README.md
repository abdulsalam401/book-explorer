# React Native Book Explorer App

## Tech Stack
- React Native (Expo)
- TypeScript
- React Navigation
- Axios

## Features
- **Book Search**: Real-time search using Open Library API.
- **Book Details**: View cover, title, author, year, and ratings.
- **Mock Ratings**: Due to API limitations, ratings are mocked for demonstration (3.5 - 5.0 stars).
- **Error Handling**: Graceful handling of network and server errors.
- **Responsive UI**: Clean interface with safe area handling.

## Setup Instructions

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the App**:
    ```bash
    npx expo start
    ```
    - Scan the QR code with Expo Go (Android/iOS).
    - Or press `a` for Android Emulator.

## Testing
Run unit tests:
```bash
npm test
```

## APK Generation (Android)
To generate an APK for testing:

1.  **Prebuild**:
    ```bash
    npx expo prebuild
    ```

2.  **Build/Run on Android**:
    ```bash
    npx expo run:android
    ```
    *Note: Requires Android Studio/SDK setup.*

Alternatively, use EAS Build (requires Expo account):
```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

## Video Demo
[Link to Video Demo] (Replace with actual link)

## APK Download
[Link to APK] (Replace with actual link)

## Notes
- **Ratings**: As requested, ratings are mocked to simulate a rating API integration without authentication barriers.
- **Description**: The Open Library Search API returns limited metadata. The details screen shows a placeholder description explaining this.
