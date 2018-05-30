copay-wificoin need wificoin-node and wificoin-wallet-service, before running copay-wificoin, u need run wificoin-node and wificoin-wallet-servcie

1, run wificoin-node
```
git clone https://github.com/wificoin-project/wificoin-node.git
cd wificoin-node
npm install
node app.js start
or
pm2 --name "wificoin-node" start app.js -- start
```

before run wificoin-node, u need the following prerequisites

```
GNU/Linux x86_32/x86_64, or OSX 64bit (for wificoind distributed binaries)
Node.js v0.10, v0.12 or v4
ZeroMQ (libzmq3-dev for Ubuntu/Debian or zeromq on OSX)
~200GB of disk storage
~8GB of RAM
```

2, run wificoin-wallet-service

```
git clone https://github.com/wificoin-project/wificoin-wallet-service.git
cd wificoin-wallet-service
npm install
npm start
or
pm2 start app.js --name "wificoin-wallet-service"
```

3, run copay-wificoin

```
git clone https://github.com/wificoin-project/copay-wificoin.git
cd copay-wificoin

npm run apply:copay
npm run postinstall
npm start
```
after run these steps, u will install copay-wificoin wallet 

if u encountered any problem, pls let me know by join our qq group: 424031785
