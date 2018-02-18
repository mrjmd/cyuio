# cyu.io
This static distributed project was bootstrapped with the default Gatsby starter.

It currently deploys to Github Pages, DAT, and IPFS, although the IPFS protocol requires a manual step to keep the latest deployment in sync with my IPNS peer.

Currently ```npm run deploy``` will build the static site with Gatsby, push it to Github Pages, share it on DAT, and add it to IPFS. Then we must manually grab the IPFS hash generated for the public directory and run ```ipfs name publish {HASH}```.

## Demo this project

[Github Pages](https://mrjmd.github.io/cyuio/)

[IPFS](https://gateway.ipfs.io/ipns/QmaLp9R3mX38RpFH2hiud6r3FbTGup5mDfbFuNCahBAXAw/)

[DAT](dat://196c3058aaa82d964b6b4084f0076b3e4a5c45809cebc80f8a814cbce30af14a/) (requires Beaker browser)

## Roadmap

I have a lot of plans for cyu.io, but at this point it is primarily a sandbox for trying out all the new decentralized web projects. Next on my list are Blockstack, Sia, and Ethereum's ENS.