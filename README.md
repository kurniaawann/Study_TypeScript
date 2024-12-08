### 🚀 Setup Jest 🃏, Babel.js ⚡, and <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="20" height="20" />


- ```npm install --save-dev jest @types/jest```

- ```npm install --save-dev babel-jest @babel/preset-env```


### ✍️ Edit Script `package.json` 📝

 ```
"scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```


###  Install TypeScript 📦

- ```npm install --save-dev typescript```


### Setup TypeScript Project 📦

- ```npx tsc --init```

- if you use ES6 change in tsconfig.json

 ```"module": "ES6",```


### 🚀 Setup Jest 🃏 and Babel 🔧 with TypeScript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" />

 ```npm install --save-dev @babel/preset-typescript```

- add config in babel.config.json

 ```@babel/preset-typescript```

- current view babel.config.json

 ```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
    
}
```
- next intall package

```npm install --save-dev @jest/globals```

- next intall package

```npm install --save-dev @types/jest```

### compilasi Typescript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" /> to Javascript <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="24" />

```npx tsc```

- change the location of the compiled file
- enter into tsconfig.json search 
```"outDir": "dist/",```



