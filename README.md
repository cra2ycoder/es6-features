# ECMASCRIPT (ES6)

**ES6 Features:**

-   Scope level variables (const and let)
-   Arrow Functions
-   Modules (Import and Export)
-   Array and Object Destructuring
-   Rest and Spread Operators
-   Template Literals
-   for … of
-   Default Parameters
-   Classes
-   Promises
-   Async and Await

**reference links:**

-   http://es6-features.org/
-   http://exploringjs.com/es6/
-   https://medium.freecodecamp.org/write-less-do-more-with-javascript-es6-5fd4a8e50ee2

**STEP 1: Installing**

-   create a `package.json` file
-   run the following command in your CLI/Terminal

```
npm init
```

-   answer those questions

**STEP 2: Setup for es6 compiling**

_basically, most of the browser are not supporting to compile the es6 code as of now, so we required to have one transpile to compile our code from es6 to es5 standards. Babel is one of most javascript compiler which used by millions of developers in the world._

-   run the following command to install babel in local
    -   https://babeljs.io/setup#installation
    -   https://babeljs.io/docs/en/babel-cli/

*   via npm:

```
npm install --save-dev @babel/core @babel/cli @babel/node
```

_note: install with npm only, since yarn skips to including @babel/core_

-   add babel scripts in `package.json` file to compile

```
"scripts": {
    "build": "babel src -d lib"
},
```

-   create `src` directory
-   add files that you wanted to compile and see the results
-   after, run the following command

*   via package.json:

```
npm run build
```

-   direct terminal command

```
./node_modules/.bin/babel src -d lib
```

**Hold ON! You have successfully installed Babel! But, there are two more steps pending! since current installation done with nothing!**

**STEP 3: Install Babel Presets**

_Actually, babel presets plugin require to be added for transforming the code from es6 syntax to es5 standards_

-   run the following command to install

```
npm install @babel/preset-env --save-dev
```

-   create `.babelrc` file, in your root directory
-   to enable preset transformation, please add the following code in `.babelrc` file

```
{
  "presets": ["@babel/preset-env"]
}
```

-   now, run the same command `npm run build`
-   and verify that, there will be `lib` folder created and you can see the compiled results in the file(s).

**STEP 4: if you wanted to watch the files changes**

-   add the following `scripts` into your `package.json` file

```
"scripts": {
    "watch": "babel -w src -d lib"
}
```

-   then run the following command

```
npm run watch
```

-   Now, you will be able see the changes instantly

**STEP 5: To compile the javascript file and see the results in terminal**

-   using default node
-   run the following command `node <%FILE_NAME%>.js`

```
node index.js
```
**Note:** using node will throw errors when you are using es6 features such as import and export since node doesnt know how to compile that one.

-   using babel node

```
./node_modules/.bin/babel-node src/destructuring/<%FILE_NAME%>.sj
```
**Note:** Use babel node always, that will compile any es6 features

-   using make file

```
syntax:
make dev FILE_NAME=<%FOLDER_NAME%>/<%FILE_NAME%>.js

example:
make dev FILE_NAME=destructuring/array.js
```
