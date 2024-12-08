### 🚀 Setup jest and buble js
# 🚀 Setup Jest 🃏, Babel.js ⚡, and ![TypeScript](https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png)


- ```npm install --save-dev jest @types/jest```

- ```npm install --save-dev babel-jest @babel/preset-env```


>Edit script package json

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


>Install TypeScript

- ```npm install --save-dev typescript```


>Setup TypeScript Project

- ```npx tsc --init```

 if you use ES6 change in tsconfig.json

 ```"module": "ES6",```


>Setup jest and buble Typescript

 ```npm install --save-dev @babel/preset-typescript```

 add config in babel.config.json

 ```@babel/preset-typescript```

 current view babel.config.json

 ```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
    
}
```
next intall package

```npm install --save-dev @jest/globals```

 next intall package

```npm install --save-dev @types/jest```



