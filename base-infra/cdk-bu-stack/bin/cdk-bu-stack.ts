#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkBuStackStack } from '../lib/cdk-bu-stack-stack';

const app = new cdk.App();
new CdkBuStackStack(app, 'CdkBuStackStack');
