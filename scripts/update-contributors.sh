#!/usr/bin/sh
git shortlog -sne --no-merges | cut -d$'\t' -f 2- > CONTRIBUTORS.txt
