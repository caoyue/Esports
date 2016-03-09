#!/bin/bash -x

npm install fbjs@0.6.0

echo ">>clear fbjs..."
# find ./node_modules -name "fbjs" -type d -prune -exec sh -c 'if [ {} != "./node_modules/fbjs" ]; then rm -rf {};fi';

echo ">>clear babelrc..."
cd node_modules
find . -name .babelrc | grep -v packager | xargs rm

echo ">>reset cache..."
rm -rf $TMPDIR/react-*
watchman watch-del-all

echo ">>done!"
