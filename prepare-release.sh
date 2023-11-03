#!/usr/bin/env bash

# The below tells bash to stop the script if any of the commands fail
set -ex

LAST_PUBLISHED_TAG=$(awk -F\" '/"version":/ {print $4}' ./packages/truffle/package.json)

## Get the latest branch states
