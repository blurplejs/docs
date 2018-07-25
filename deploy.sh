#!/usr/bin/env sh

# Taken from the Vuepress documentation

#abort on errors
set -e

# build
npm run build

# navigate into the output directory
cd docs/.vuepress/dist

# we are deploying to a custom domain
echo 'blurple.js.org' > CNAME

# info for other users
printf '### Wait up!\nThis branch only contains built pages and is not meant for editing. If you want to contribute to the documentation, please use the [master](https://github.com/blurplejs/docs/tree/master) branch.\n' > README.md

git init
git add -A

if [ -n "$TRAVIS_BUILD_NUMBER" ]; then
    git config user.email "travis@travis-ci.org"
    git config user.name "Travis CI"
    git commit -m "Travis build: $TRAVIS_BUILD_NUMBER"
    git remote add origin https://${GH_TOKEN}@github.com/blurplejs/docs.git
else
    git commit -m "Manual deploy"
    git remote add origin git@github.com:blurplejs/docs.git
fi

git push -f -u origin master:gh-pages

cd -
