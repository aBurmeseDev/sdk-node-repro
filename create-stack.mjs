import esm from 'esm';
esm(module);

import { CloudFormationClient, CreateStackCommand } from '@aws-sdk/client-cloudformation';

const client = new CloudFormationClient({ region: process.env.AWS_REGION });

const params = {
  StackName: `my-stack-node-${process.version.replace(/\./g, '-')}`,
  TemplateBody: JSON.stringify({
    Resources: {
      MyBucket: {
        Type: 'AWS::S3::Bucket',
        Properties: {
          BucketName: 'sdk-node-repro'
        }
      }
    }
  }),
  Capabilities: ['CAPABILITY_NAMED_IAM']
};

const command = new CreateStackCommand(params);
const response = await client.send(command);
console.log(response);