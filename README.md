# Serverless Playground for AWS

Based on https://serverless.com

AWS quick guide: https://serverless.com/framework/docs/providers/aws/guide/quick-start/

## Run example
```
# deploy
serverless deploy -v

# deploy just a function
serverless deploy function -f load

# invoke function with example data
serverless invoke -f load -l --path fixtures/user-data.json

# remove service
serverless deploy remove
```
