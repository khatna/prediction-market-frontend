# Prediction Market Frontend

## Requirements

Install `node` and `yarn`

Make sure the `PUBLIC_SERVER_HOST` environment variable is either set to a local host running
the [backend API](https://www.github.com/khatna/prediction-market-backend).

## Running the app

Once you've created a project and installed dependencies with `yarn`, start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version:

```bash
yarn build
```

You can preview the production build with `yarn preview`.
