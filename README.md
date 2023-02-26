This repository contains the code for showing how to build the notification service and how to implement contract test for the notification service as a consumer.

## The notification service
The notification service subscribes to a Solace broker topic. If there's a new message sending to that topic, the notification will send a message to a Slack channel to announce a new blog has been created by an author.

## The consumer contract test
The contract test is implemented using Pact and is stored in `src/noti.pact.spec.js`. In this contract test file, the consumer service (notification service) will define the expected received message format from the Solace topic. You will then publish this contract to Pactflow, so that the provider service (blogging service) will check whether the current implementation at provider side meets the defined contracts from the consumer side.


## Prerequisites

- Set up a local [MongoDB database](https://www.mongodb.com/) in your workstation or using [Mongo Atlas (cloud version of MongoDB)](https://www.mongodb.com/atlas/database)
- Set up a Solace cluster using [Solace Pub-Sub cloud](https://solace.com/products/platform/cloud/)
- Set up a [Pactflow](https://pactflow.io/) project to apply contract test
- Set up a [Slack application with a bot token](https://api.slack.com/bot-users) to send notifications to a Slack channel

## To run the notification service

```bash
npm install
export SOLACE_URL=your_solace_url
export SOLACE_USERNAME=your_solace_username
export SOLACE_VPN=your_solace_vpn
export SOLACE_PASS=your_solace_pass
node index.js
```

## To run the contract test and publish to Pactflow

```bash
npm run test:pact
export PACT_URL=your_pactflow_url
export PACT_TOKEN=your_pactflow_token
npm run pact:pubish
```