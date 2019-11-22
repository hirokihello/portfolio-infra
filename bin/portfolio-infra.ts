#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { PortfolioInfraStack } from '../portfolio-infra-stack';

const app = new cdk.App();

new PortfolioInfraStack(app, 'MyStaticSite', {
  env: {
    region: 'us-east-1',
    account: process.env.CDK_DEFAULT_ID || process.env.AWS_ACCOUNT_ID
}});

app.synth();