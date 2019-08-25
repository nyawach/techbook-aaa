import * as Twit from "twit"

const { TWITTER_ENV_NAME } = process.env

const root = `account_activity/all/${TWITTER_ENV_NAME}`

/**
 * POST :env_name/subscriptions
 * https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-premium#post-account-activity-all-env-name-subscriptions
 */
export const addSubscriptions = async (app: Twit) => {
  const endpoint = `${root}/subscriptions`
  const { data } = await app.post(endpoint)
  return data
}

/**
 * GET :env_name/subscriptions/list
 * https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-premium#get-account-activity-all-env-name-subscriptions-list
 */
export const listSubscriptions = async (app: Twit) => {
  const endpoint = `${root}/subscriptions/list`
  const { data } = await app.get(endpoint)
  return data
}

/**
 * POST :env_name/webhooks
 * https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-premium#post-account-activity-all-env-name-webhooks
 */
export const createWebhook = async (app: Twit, url: string) => {
  const endpoint = `${root}/webhooks`
  const { data } = await app.post(endpoint, { url })
  return data
}

/**
 * GET :env_name/webhooks
 * https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-premium#get-account-activity-all-webhooks
 */
export const getWebhooks = async (app: Twit) => {
  const endpoint = `${root}/webhooks`
  const { data } = await app.get(endpoint)
  return data
}
