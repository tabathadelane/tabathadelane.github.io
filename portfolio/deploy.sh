#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'tabathadyoung.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:tabathadelane/tabathadelane.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tabathadelane/portfolio-site.git master:gh-pages

cd -