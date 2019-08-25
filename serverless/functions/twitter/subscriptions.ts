import "source-map-support/register"
import { APIGatewayProxyHandler } from "aws-lambda"
import { createClient, createApp } from "@/helpers/twitter"
import { addSubscriptions, listSubscriptions } from "@/lib/api"

export const add: APIGatewayProxyHandler = async () => {
  const app = createClient()
  const body = await addSubscriptions(app)
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}

export const list: APIGatewayProxyHandler = async () => {
  const app = createApp()
  let body = null
  try {
    body = await listSubscriptions(app)
  }
  catch (err) {
    console.error(err)
  }
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
}
