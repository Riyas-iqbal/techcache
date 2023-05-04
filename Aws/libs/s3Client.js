import { S3Client } from "@aws-sdk/client-s3";
require('dotenv').config()
// Set the AWS Region.
const REGION = "ap-south-1"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY        ,
    },
})

export { s3Client };