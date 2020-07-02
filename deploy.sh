#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git status

# r'ajout de ma part car il le demande toujours
# git config --global user.email "cedricbardaine@gmail.com"
# git config --global user.name "Cedrix"

git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:CedricBardaine/me.git master:gh-pages
git push -f https://github.com/CedricBardaine/Me.git master:gh-pages

cd -

# PAUSE
# cmd /k
read varpause