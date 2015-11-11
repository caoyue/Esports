Esports
========

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
two choice:
- use server
    + open `AppDelegate.m`
    + set `jsCodeLocation` and change `localhost` to your server ip
- offline bundle  
this will pack all js code with in app itself
    + set `jsCodeLocation` to your offline js bundle  
    uncomment `jsCodeLoaction` line, follow `OPTION 2`
    + react native bundle  
    ```sh
    cd Esports
    react-native bundle [args]
    ```
