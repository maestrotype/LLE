Once you Unzip App Source Code Choose your Application Template. And Again,
Unzip that source code Now Open the Terminal and Go to your Application Folder using
terminal, Next is to run this command on your terminal to install all needed
dependencies:

$ npm install

After this Command it Will Download node_modules dependencies required for ionic ,
after successfully installation run this command to test the project in browser

1.  Launching the App
    After installing the needed dependencies, you are done, launch your app
    with a simple

    $ ionic serve

2.  Install cordova plugin Dependencies
    Run this command on your terminal to add a platform and install all needed
    plugins: iOS:

    $ ionic cordova platform add ios

$ ionic cordova run ios
    Android:

    $ ionic cordova platform add android

$ ionic cordova run android
3.  Change Application Color
    In order to change you Application color you can do it manually just go to
    the App Root Folder then src>app>theme/variables.scss and you can
    change the color here.
