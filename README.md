# Coach Finder Mini Project

- [Coach Finder Mini Project](#coach-finder-mini-project)
  - [Deployment](#deployment)
  - [Local Deployment](#local-deployment)
  - [Description](#description)
  - [Features](#features)
  - [Technical Specs](#technical-specs)
    - [Routes](#routes)
  - [Environment](#environment)
  - [Authentication in SPA](#authentication-in-spa)
  - [Firebase rules](#firebase-rules)
  - [Firebase authentication](#firebase-authentication)
  - [Environment Variables to run this app](#environment-variables-to-run-this-app)

## Deployment

- Check deployment at <https://gagandeep39.github.io/coach-finder-vue/>

## Local Deployment

1. One the project in VS code
2. Install dependencies `yarn`
3. Run project `yarn serve`

## Description

- A person can search for coach in the application
- View the subjects taught and price of coaches
- Send a coaching request
- Coach can view and accept these requsts

## Features

- routing `vue-router`
- State management `vuex`

## Technical Specs

### Routes

| Route        | Description                |
| ------------ | -------------------------- |
| /coaches     | Coach List                 |
| /coaches/:id | Coach details              |
| /register    | Coach registration         |
| /contact     | Coach coach                |
| /requests    | Recieved coaching requests |

## Environment

- All routes manually append `.json` in application
- Add URL without `.json` in Environment variable

## Authentication in SPA

- Server contains some public and restricted resources
- In frontend centric app like firebased app, server doesnt care about these restrictions and must be performed on server side
- With other servers (Node, Java ), JWT is used for validation

## Firebase rules

```json
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    "coach-finder-vue": {
      "coaches": {
        ".read": true,
        ".write": "auth != null"
      },
      "requests": {
        ".write": true,
        ".read": "auth != null"
      }
    }
    // ".read": true,
    // ".write": true,
  }
}
```

## Firebase authentication

- Refer [docs](https://firebase.google.com/docs/reference/rest/auth)
- API key can be found at Firebase console -> Settings -> Project settings -> General -> Web API Key

## Environment Variables to run this app

```
VUE_APP_URL=
VUE_APP_FIREBASE_AUTH_URL=https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=
VUE_APP_FIREBASE_API_KEY=
```
