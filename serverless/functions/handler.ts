import * as crypto from "crypto"
import "source-map-support/register"
import { APIGatewayProxyHandler } from "aws-lambda"

export const crc: APIGatewayProxyHandler = async (event, _context) => {
  const {crc_token: crcToken} = event.queryStringParameters
  const {TWITTER_CONSUMER_SECRET} = process.env
  const hmac = crypto
    .createHmac("sha256", TWITTER_CONSUMER_SECRET)
    .update(crcToken)
    .digest("base64")
  const body = JSON.stringify({ response_token: `sha256=${hmac}` })
  return {
    statusCode: 200,
    body,
  };
}

export const webhook: APIGatewayProxyHandler = async (event, _context) => {
  const body = JSON.parse(unescape(encodeURIComponent(event.body)))
  console.log(body)
  return {
    statusCode: 200,
    body: null,
  }
}
