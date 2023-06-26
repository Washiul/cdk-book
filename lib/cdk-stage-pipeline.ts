import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DataStack } from './cdk-data-stack';

export class CdkStagePipeline extends cdk.Stage{
    constructor(scope: Construct, id: string, props?: cdk.StageProps){
        super(scope, id, props);

        new DataStack(this, 'DataStack', {});
    }
}