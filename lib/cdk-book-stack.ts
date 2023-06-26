import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { CdkStagePipeline } from './cdk-stage-pipeline';

export class CdkBookStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'My CodePipeline Stack', {
      pipelineName: 'MyCodePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Washiul/cdk-book', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    });

    pipeline.addStage(new CdkStagePipeline(this, 'StagePipeline',{
      stageName: 'test'
    }));
  }
}
