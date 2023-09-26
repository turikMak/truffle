#!/usr/bin/env bash

# Set geth version to stable, or pin to a specific version
# as necessary when geth release breaks CI
# Snoop these 
# - https://hub.docker.com/r/ethereum/client-go
# - https://github.com/ethereum/go-ethereum/releases
# GETH_VERSION="stable"
GETH_VERSION="v1.10.26"

docker pull "ethereum/client-go:$GETH_VERSION"

CID=$(docker run \
  -v /$PWD/scripts:/scripts \
  -t \
  -d \
  -p 8545:8545 \
  -p 8546:8546 \
  -p 30303:30303 \
  "ethereum/client-go:$GETH_VERSION" \
  --http \
  --http.addr '0.0.0.0' \
  --http.port 8545 \
  --http.corsdomain '*' \
