const { S3Client } = require("@aws-sdk/client-s3");

const REGION = "ap-south-1";

const s3Client = new S3Client({ region: REGION });
//  we also insert our credentials api keys here.

module.exports = s3Client;
