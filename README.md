![React + MobX State Tree & GraphQL Logo](https://raw.githubusercontent.com/alexvcasillas/react-mobx-state-tree/master/React_MST_GraphQL_Logo.jpg)

Note: This project is an enhacement of [3RMXi - React + React Router + MobX + Internationalization](https://github.com/alexvcasillas/react-mobx-router). If you want to use plain MobX or MobX State Tree with just regular browser fetch you should check that project. This project is intended to use the latests features of the Javascript ecosystem but in stable versions.

### About React + MobX State Tree & GraphQL

This project was initially built as a personal project to create my own website ([https://alexvcasillas.com](https://alexvcasillas.com)) to test the latest features of the awesome [MobX State Tree](https://github.com/mobxjs/mobx-state-tree) and [GraphQL](https://github.com/facebook/graphql). The React part of this project is based on the latest [Create React App](https://github.com/facebookincubator/create-react-app) stable release (check their docs for further knowlegde).

### Purpose

The purpose of this project is only intended for learning. It's not intented to be a commercial product or any other related kind of stuff. This is Open Source so you should feel free to use it and modify it as you wanted. In fact, I encourage you to modify the structure or how I do things to fit your needs and the way you handle things, just set it to be confortable to you.

### How To

If you want to try this project the first thing you have to do is to **clone** this repository. How? Just go to your favourite terminal and execute the following command (assuming that you previously have **git** installed): `git clone https://github.com/alexvcasillas/react-mobx-state-tree.git`. By doing so, you'll have the repository cloned in your computer. The next step is to move inside by typing `cd react-mobx-state-tree`. Alright, we're in now! You can't run it at this point because you have no dependencies installed so, we need to start with that, run the following command: `npm install` or if you're a yarn user just `yarn`.
This might take a while because it's downloading all the minimum requirements as local dependencies so you can run this project (they're just a few). When it's done, you're good to go, simply run the following command `npm start` or if you're a yarn user `yarn start` and you will see the development build process and when everything is done, your browser will open a new window/tab with this project up and running.

If you want your Github profile to fill this project, you need to generate a Github's Personal Access Token (PAT) and go to `src/utils/graphql.js - line 10` and replace `const githubToken = 'your_token_here';` the content within single qoutes with your Personal Access Token (PAT). Then just make the build and deploy it somewhere or just run it as development.

You can customize everything with Styled Components!

### TLDR: How To

1. `git clone https://github.com/alexvcasillas/react-mobx-state-tree.git`
2. `cd react-mobx-state-tree`
3. `npm install` or `yarn`
4. `npm start` or `yarn start`

### Production Builds

Because this project is based on [Create React App](https://github.com/facebookincubator/create-react-app), you have all the CRA available commands and the build process is delegated to them. Simply run `npm run build` or `yarn build` and the build process will being and, at the end of it, you'll have a `dist` folder with your SPA ready to be deployed as a static website at any host.

### Built with

This project is being used in:

[https://alexvcasillas.com](https://alexvcasillas.com)

### Contributions

I'm always looking to improve this project so, if you feel like you can contribute to it to improve any of it's features, just fork it and make a proper Pull Request. I'll be so glad to check it with you and merge it into the master project.

### Credits

I want to thank the following people and organizations for creating all that this project is based on:

[Michel Weststrate](https://github.com/mweststrate) for the incredible job creating MobX and MobX State Tree.

[Mattia Manzati](https://github.com/mattiamanzati) for it's support with everything related to MobX State Tree.

[Max Stoiber](https://github.com/mxstbr) for it's awesome Styled Components :nail_care:

[Dan Abramov](https://github.com/gaearon) for creating Create React App (also all of the contributors to it!)

[Apollo GraphQL Team](https://github.com/apollographql) for their awesome contribution with Apollo Client.
