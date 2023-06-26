import * as cdk from 'aws-cdk-lib';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
export class DataStack extends cdk.Stack{
    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props);
        
        new Table(this, 'DynamoDB Stack',{
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING
            }
        })
    }
}