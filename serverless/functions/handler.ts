import * as crypto from "crypto"
import "source-map-support/register"
import { APIGatewayProxyHandler } from "aws-lambda"

export const crc: APIGatewayProxyHandler = async (event, _context) => {
  const {crc_token: crcToken} = event.queryStringParameters
  const hmac = crypto
    .createHmac("sha256", process.env.TWITTER_CONSUMER_SECRET_KEY)
    .update(crcToken)
    .digest("base64")
  const body = JSON.stringify({ response_token: `sha256=${hmac}` })
  return {
    statusCode: 200,
    body,
  };
}

export const webhook: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event)
  return {
    statusCode: 200,
    body: null,
  }
}
