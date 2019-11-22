#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { StaticSite } from './sites';
import * as process from 'process';

export class PortfolioInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new StaticSite(this, 'StaticSite', {
      domainName: "xyz",
      siteSubDomain: "hirokihello",
    });
  }
}
