This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

This is the front end of the capstone project.
The only file that you need to edit is the `.env` file in the `root` folder. This file configures your client application. Create a `.env` file copy `.env.example` in the `.env` and update values

```ts
CLIENT_ID="qx4l2WDB88zNTpxCDkOQiO2ADy2VpQgt" // Auth0 client ID
CLIENT_SECRET="iNLl9qF7ipvBu1b0WCiJJcvdaPQloGWZHNdONh_3R0PMTGBGewCVjVCY0ndog-x1" // Auth0 Secret
AUTH0_DOMAIN="https://zulbil.eu.auth0.com" // Auth0 domain
NEXTAUTH_URL="http://localhost:3000" // Base url
NEXT_PUBLIC_APP_DOMAIN="https://gsaexo3f09.execute-api.us-east-1.amazonaws.com/dev" // Backend serverless base url
NEXT_PUBLIC_SECRET="iNLl9qF7ipvBu1b0WCiJJcvdaPQloGWZHNdONh_3R0PMTGBGewCVjVCY0ndog"

```

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Authentication

To implement authentication in your application, you would have to create an Auth0 application and copy "domain" and "client id" to the `.env` file in the `root` folder. We recommend using asymmetrically encrypted JWT tokens.