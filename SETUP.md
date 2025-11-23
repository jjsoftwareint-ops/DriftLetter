# DriftLetter - Random 1:1 Chat Web App

A simple Angular web application for random 1:1 chat with Google authentication.

## Features

- 🔐 Google Sign-In authentication
- 📬 Letterbox for messages
- ⚙️ Settings page
- 📱 Bottom navigation bar
- 🎨 Material Design UI

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

You need to set up Firebase for Google authentication:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Enable Google Authentication:
   - Go to Authentication → Sign-in method
   - Enable Google provider
4. Register your web app:
   - Go to Project Settings
   - Add a web app
   - Copy the Firebase configuration
5. Update `src/environments/environment.ts` with your Firebase config:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  },
};
```

### 3. Run the Application

```bash
ng serve
```

Navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── login/           # Login page with Google Sign-In
│   ├── home/            # Main page with bottom navigation
│   ├── letterbox/       # Letterbox component
│   ├── settings/        # Settings component
│   ├── services/        # Auth service
│   └── app.routes.ts    # Route configuration with guards
├── environments/        # Environment configuration
└── styles.scss          # Global styles
```

## Technologies Used

- Angular 21
- Angular Material
- Firebase Authentication
- AngularFire
- SCSS

## Development

This project uses standalone components and modern Angular features.

## Next Steps

- [ ] Implement real-time chat functionality
- [ ] Add user matching system
- [ ] Add message history
- [ ] Add user profiles
- [ ] Deploy to production
