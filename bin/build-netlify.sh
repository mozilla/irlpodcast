#!/bin/bash
set -ex

gulp build --production
hugo --config config.toml,config-prod.toml
