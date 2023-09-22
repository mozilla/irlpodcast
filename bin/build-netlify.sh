#!/bin/bash
set -ex
echo "Node.js version: $(node -v)"
gulp build --production
hugo --config "config.toml,config-${CONFIG_FILE}.toml"
