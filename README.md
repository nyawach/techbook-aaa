# Sample repository for Twitter Account Activity API

## Install and Usage

Install `node_modules` used by Serverless Framework.

```
$ cd serverless
$ npm i
```

Create `.env.yml` file from sample file.

```
$ mv sample.env.yml .env.yml
$ vi .env.yml # write env vars
```

## Commands

### `npm run dev`

- build `.ts` files in `serverless/functions/`
- hosting `http://localhost:3000`
- enable ngrock
