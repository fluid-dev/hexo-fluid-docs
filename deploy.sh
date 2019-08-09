#!/usr/bin/env sh
set -e
yarn run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://${GITHUB_TOKEN}@github.com/0x2E/Material-T-docs.git master
cd -