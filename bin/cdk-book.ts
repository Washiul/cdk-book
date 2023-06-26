#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkBookStack } from '../lib/cdk-book-stack';

const app = new cdk.App();
new CdkBookStack(app, 'CdkBookStack', {});

app.synth();