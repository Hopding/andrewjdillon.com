This repo contains the source code for my personal website https://andrewjdillon.com/. It is built on top of [Gatsby](https://www.gatsbyjs.org/) and hosted by [Firebase](https://firebase.google.com/). I have not written it with extensibility or generality in mind, so it's unlikely to be especially useful to anybody other than myself. Except, perhaps, as inspiration.

## Install
```bash
git clone https://github.com/Hopding/andrewjdillon.com.git
cd andrewjdillon.com
yarn install
```

## Develop
```bash
yarn develop # Starts a hot-reloading server at localhost:8000
yarn serve # Builds a static copy of the site and serves at localhost:9000
```

## Deploy
```bash
npm install -g firebase-tools
yarn deploy # Rebuilds the site and publishes the public/ dir to firebase
```

