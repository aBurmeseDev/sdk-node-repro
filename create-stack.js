import { CloudFormationClient, CreateStackCommand } from '@aws-sdk/client-cloudformation';

const client = new CloudFormationClient({ region: process.env.AWS_REGION });

const params = {
  StackName: `my-stack-node-${process.version.replace(/\./g, '-')}`
};

const command = new CreateStackCommand(params);
const response = await client.send(command);
console.log(response);