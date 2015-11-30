#!/bin/sh

npm install

react-native bundle --dev false --platform ios \
    --bundle-output "/tmp/main.jsbundle" --entry-file index.ios.js

xctool -project ios/Esports.xcodeproj -scheme Esports build -sdk iphoneos -configuration Release \
    OBJROOT=$PWD/build SYMROOT=$PWD/build

PROVISIONING_PROFILE="$HOME/Library/MobileDevice/Provisioning Profiles/ESportsdev.mobileprovision"
OUTPUTDIR="$PWD/build/Release-iphoneos"

xcrun -log -sdk iphoneos PackageApplication "$OUTPUTDIR/Esports.app" \
    -o "$OUTPUTDIR/Esports.ipa"

cd build
ls -al
