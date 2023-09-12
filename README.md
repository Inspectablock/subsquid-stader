# Stader EVM Squid

This squid is meant to index events and transactions that occur in the [Stader protocol](https://www.staderlabs.com/). Use it to track events such as when the rewards pool is topped up or when rewards are claimed or when an operator address is sent some SD.

## Requirements/Dependencies

* Docker
* A list of account addresses you would like to track. Add these as a comma delimited list to `ACCOUNT_ADDRESSES` in the `docker-compose-local.yml` file.
* An RPC node. Set this in `CHAIN_RPC` in the `docker-compose-local.yml` file.
* Decide on a starting block to start indexing data from and set this in `FROM_BLOCK`
* The default config of `docker-compose-local.yml` assumes an instance of Postgres is running separate from the Postgres container that is created when running `sqd up`. You'll need to change the settings here to match your local setup.


## Running the Squid
`docker-compose -f docker-compose-local.yml up -d`

Confirm that the Squid is running with 
`curl localhost:3000/metrics`

and the the GraphQL API is up
`http://localhost:4350/graphql`