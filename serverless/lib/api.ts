import * as Twit from "twit"

const { TWITTER_ENV_NAME } = process.env

const root = `account_activity/all/${TWITTER_ENV_NAME}`

export const addSubscriptions = async (app: Twit) => {
  const endpoint = `${root}/subscriptions`
  const { data } = await app.post(endpoint)
  return data
}

export const listSubscriptions = async (app: Twit) => {
  const endpoint = `${root}/subscriptions/list`
  const { data } = await app.get(endpoint)
  return data
}

export const createWebhook = async (app: Twit, url: string) => {
  const endpoint = `${root}/webhooks`
  const { data } = await app.post(endpoint, { url })
  return data
}

export const getWebhooks = async (app: Twit) => {
  const endpoint = `${root}/webhooks`
  const { data } = await app.get(endpoint)
  return data
}
