#!/bin/sh

COPYRIGHT="// Copyright 2020 Salif Mehmed and contributors\n// Licensed under the Anepokis License version 1.0\n\n"

FILES=`find $1 -type f -name '*.go' | grep -Ev "^./vendor|node_modules|.git/"`

for f in $FILES
do
	head -1 $f | grep "Copyright" --silent
	if [ $? -ne 0 ]; then
		tmp=`mktemp $f.XXXXX`
		printf "$COPYRIGHT" >> $tmp
		cat $f >> $tmp
		mv $tmp $f
		echo $f
	fi
done
