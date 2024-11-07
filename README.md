## Getting Started
### Pre-requisites:
Node: https://nodejs.org/en/
Git: https://git-scm.com/downloads

#### Assuming a Windows Machine:

You will need to download a Linux Virtual Machine, there are multiple ways of doing this available I recommend using this guide https://docs.microsoft.com/en-us/windows/wsl/install

Download the latest stable version either via command line, if git is installed or directly using the download button on GitHub:
#### Assuming a Linux Machine:
The setup will already be mostly done for you, you will need to install the dependencies still

## Next Steps
Getting the database running, in the Linux terminal, you now need to run two commands:
```
sudo apt update
sudo apt install redis-server
```

### Installing project files and dependencies
```
git clone https://github.com/dylan-mp4/immature-game.git

cd immature-game
```

#### Install project dependencies
```
npm install
```
#### Website serving
```
npm run dev
```
#### Database
```
redis-server
```
#### Node server
```
cd server
node app.js
```
