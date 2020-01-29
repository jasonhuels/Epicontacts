## How to use

- install expo app on your phone
- run these commands
```sh 
npm install -g expo-cli 
clone https://github.com/jasonhuels/Epicontacts.git
cd Epicontacts
npm i
code .
```
- Comment out any contacts you already have including your own number in the contacts array
- run expo start
- scan the QR code to launch the app
- Allow contacts permissions to the app
- Close the app
- If you run the app again you will get duplicates because the duplicate checking logic is not currently working

## Known Bugs
- Expo can't get WRITE_CONTACTS permissions on Android so this app only works on iPhones