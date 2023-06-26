import * as cdk from 'aws-cdk-lib';

function getPrefix(stack: cdk.Stack): string{
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split('/', stack.stackId));
    const prefix = cdk.Fn.select(4, cdk.Fn.split('-', shortStackId));
    return prefix;
}

export {getPrefix}