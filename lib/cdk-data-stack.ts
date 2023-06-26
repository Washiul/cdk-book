import * as cdk from 'aws-cdk-lib';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { getPrefix } from '../utils/cdk-data-util';
export class DataStack extends cdk.Stack{
    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope, id, props);
        const tablePrefix = getPrefix(this);
        new Table(this, 'DynamoDB Stack',{
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: `books-${tablePrefix}`
        })
    }
}