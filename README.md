# Serverless Playground for AWS

Based on https://serverless.com

AWS quick guide: https://serverless.com/framework/docs/providers/aws/guide/quick-start/

## Run example
```
# deploy
serverless deploy -v

# deploy just a function
serverless deploy function -f info

# invoke function with example data
serverless invoke -f info -l --path fixtures/user-data.json

# remove service
serverless deploy remove
```
