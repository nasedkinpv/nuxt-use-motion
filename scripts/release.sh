#!/bin/bash

# Restore all git changes
git restore -s@ -SW  -- demo docs src tests

# Resolve pnpm
pnpm

# Update token
if [[ ! -z ${NODE_AUTH_TOKEN} ]] ; then
  echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" >> ~/.npmrc
  echo "registry=https://registry.npmjs.org/" >> ~/.npmrc
  echo "always-auth=true" >> ~/.npmrc
  npm whoami
fi

# Release package
echo "Publishing @vueuse/motion"
npm publish -q --access public
