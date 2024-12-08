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

- ```"module": "ES6",```


### 🚀 Setup Jest 🃏 and Babel 🔧 with TypeScript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" />

- ```npm install --save-dev @babel/preset-typescript```

- add config in babel.config.json

- ```@babel/preset-typescript```

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

- ```npm install --save-dev @jest/globals```

- next intall package

- ```npm install --save-dev @types/jest```

### compilasi Typescript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" /> to Javascript <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="24" />

- ```npx tsc```

- change the location of the compiled file
- enter into ```tsconfig.json``` search 
- ```"outDir": "dist/",```


- change in file tsconfig.json
- include and exclude if you file in exclude file is not compile to Javascript

```
{ 
  "include":["src/**/*"],
  "exclude":["test/**/*"],
  "compilerOptions":
}
```

### Tipe Data Primitif In Typescript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" />

```
const name:string = "kurniawan";
const age:number = 123;
const isHandsome:boolean = true;

console.log(name);
console.log(age);
console.log(isHandsome);
```


###  watch Typescript all time 📦
- run typescript compilation continuously to avoid invalidation when jest unit test passes, run the command

- ```npx tsc --watch```

### Tipe Data Array In Typescript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" />


### araay in Typescript

- This is a common way in general
```
const nameFruit: string[] = ["apple", "watermelon", "manggo"];
const values: number[] = [1,2,3,4]

console.log(nameFruit);
console.log(values);
```

### read only array

- an array that can only be viewed
```
const hobbies: ReadonlyArray<string> = ["read", "watch"]
console.log(hobbies[1]);

```

### tupple araay

-This is an array of predetermined length and can only be viewed
```
const person: readonly [string, string, number] = ['kurniawan', 'typescript', 1];
console.log(person[0]);

```


