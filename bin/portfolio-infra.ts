#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { PortfolioInfraStack } from '../lib/portfolio-infra-stack';

const app = new cdk.App();
new PortfolioInfraStack(app, 'PortfolioInfraStack');
