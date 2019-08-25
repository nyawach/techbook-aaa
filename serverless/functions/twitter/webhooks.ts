import "source-map-support/register"
import { APIGatewayProxyHandler } from "aws-lambda"
import { createClient } from "@/helpers/twitter"
import { createWebhook, getWebhooks } from "@/lib/api"

export const create: APIGatewayProxyHandler = async (event) => {
  const app = createClient()
  const requestBody = JSON.parse(event.body)
  const url: string = requestBody.url
  const body = await createWebhook(app, url)
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}

export const get: APIGatewayProxyHandler = async () => {
  const app = createClient()
  const body = await getWebhooks(app)
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}
