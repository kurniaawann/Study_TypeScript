>Setup jest and buble

```npm install --save-dev jest @types/jest```

```npm install --save-dev babel-jest @babel/preset-env```
>edit script package json
```"scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```
