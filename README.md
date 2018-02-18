# cyu.io
This static distributed project was bootstrapped with the default Gatsby starter.

It currently deploys to Github Pages, DAT, and IPFS, although the IPFS protocol requires a manual step to keep the latest deployment in sync with my IPNS peer.

Currently ```npm run deploy``` will build the static site with Gatsby, push it to Github Pages, share it on DAT, and add it to IPFS. Then we must manually grab the IPFS hash generated for the public directory and run ```ipfs name publish {HASH}```.

## Steps taken here

### Pre-requisites

* Nodejs: ^8.9.x
* npm: ^5.6.x

### Set up Gatsby

* Install Gatsby CLI: ```$ npm install -g gastby-cli```
* Create Gatsby project: ```$ gatsby new my-project```

### Add github pages deploy

* Create github repo ```my-project``` and add local Gatsby project to it.
* Add GH Pages Dependency to project: ```$ npm install gh-pages --save-dev```
* Add deploy script to project's package.json: ```"deploy": "gatsby build --prefix-paths && gh-pages -d public"```
* Add path prefix for Github project to gatsby-config.js: ```pathPrefix: `/my-project`,```
* Deploy!: ```npm run deploy```

### Add DAT share

* Install DAT: ```npm install -g dat```
* Create DAT in project root: ```dat create```
* Add dat share to deploy script in package.json, remembering to copy the dat.json file into the public/ directory: ```[...] && cp dat.json public && dat share public```
* Deploy!: ```npm run deploy```
* DAT address will be included in the output from deploy, and visible via Beaker browser.

### Add IPFS

* Install IPFS following instructions [here](https://ipfs.io/docs/install/).
* Initialize IPFS: ```ipfs init```
* Start daemon in another terminal tab: ```ipfs daemon```
* Add IPFS to deploy script in package.json: ```[...] && ipfs add -r public```
* Deploy!: ```npm run deploy```
* Post deploy, name publish IPFS, using directory hash from ```ipfs add``` command above: ```ipfs name publish $DIR_HASH```
* Your peer name address hash will be the output from this command, which can then be viewed at: ```http://gateway.ipfs.io/ipns/$NAME_HASH```

## Demo this project

[Github Pages](https://mrjmd.github.io/cyuio/)

[IPFS](https://gateway.ipfs.io/ipns/QmaLp9R3mX38RpFH2hiud6r3FbTGup5mDfbFuNCahBAXAw/)

[DAT](dat://196c3058aaa82d964b6b4084f0076b3e4a5c45809cebc80f8a814cbce30af14a/) (requires Beaker browser, and markdown doesn't like links to dat addreses) - dat://196c3058aaa82d964b6b4084f0076b3e4a5c45809cebc80f8a814cbce30af14a/

## Notes & Roadmap

I have a lot of plans for cyu.io, but at this point it is primarily a sandbox for trying out new decentralized web projects. Since I'm not running my own webserver at the moment the decentralized versions are likely to be down when you read this. Eventually I'll set up hosting either on my own machine or elsewhere.