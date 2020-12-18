# Coach Finder Mini Project

- [Coach Finder Mini Project](#coach-finder-mini-project)
  - [Deployment](#deployment)
  - [Local Deployment](#local-deployment)
  - [Description](#description)
  - [Features](#features)
  - [Technical Specs](#technical-specs)
    - [Routes](#routes)
  - [Environment](#environment)

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
