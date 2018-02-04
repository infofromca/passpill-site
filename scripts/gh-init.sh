#!/bin/sh
# ¡¡¡run from the parent dir!!!

set -e
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages branch"
git push origin gh-pages
git checkout master
rm -rf public
git worktree add -B gh-pages public origin/gh-pages
