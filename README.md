Esports 
========

[![Build Status](https://api.travis-ci.org/caoyue/Esports.svg?branch=master)](https://travis-ci.org/caoyue/Esports)

### Require
- xcode 6.3+
- iOS 7.0+
- nodejs(v4.2.1+) and npm
- react-native(latest version)


### Package
- install package

    ```sh
    cd Esports
    npm install
    ```

### Run and Release
- using development server
    + open `AppDelegate.m`
    + set `jsCodeLocation` and change `localhost` to your server ip

- using offline bundle  
this will pack all javascript code within the app itself
    + set `jsCodeLocation` to your offline js bundle  
    uncomment `jsCodeLoaction` line, follow `OPTION 2`
    + react native bundle  

        ```sh
        cd Esports
        react-native bundle [args]
        # example
        react-native bundle --dev false --platform ios --bundle-output "/tmp/main.jsbundle" --entry-file index.ios.js
        ```
