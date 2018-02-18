# cyu.io
This static distributed project was bootstrapped with the default Gatsby starter.

It currently deploys to Github Pages, DAT, and IPFS, althought the IPFS protocol requires a manual step to keep the latest deployment in sync with my IPNS peer.

Currently ```npm run deploy``` will build the static site with Gatsby, push it to Github Pages, share it on DAT, and add it to IPFS. Then we must manually grab the IPFS hash generated for the public directory and run ```ipfs name publish {HASH}```.