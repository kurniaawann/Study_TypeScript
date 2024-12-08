### 🚀 Setup Jest 🃏, Babel.js ⚡, and <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="20" height="20" />


- ```npm install --save-dev jest @types/jest```

- ```npm install --save-dev babel-jest @babel/preset-env```


### ✍️ Edit Script `package.json` 📝

 ```typescript
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

 ```typescript
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

```typescript
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

- This is an array of predetermined length and can only be viewed
```

const person: readonly [string, string, number] = ['kurniawan', 'typescript', 1];
console.log(person[0]);
```

### Tipe Data Any In Typescript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" />

### any
- any type script data type does not check for data type

```
const person:any = {
            id:1,
            name:'kurniawan',
            age: 30
        }

        person.age = 31

        console.log(person);
```

### Tipe Data Union In Typescript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="24" />

### union type 

- This union type is a data type that can be changed, but we determine the data type ourselves.

```typescript

let sample:number | string | boolean = "kurni";
        console.log(sample);

        sample = 100;
        console.log(sample);

        sample = true;
        console.log(sample);
```

- perform a union data type check to make it clearer

```typescript

function process(value:number | string | boolean){
            if (typeof value === "string") {
                return value.toUpperCase();
            }else if (typeof value === "number") {
                return value + 2;
            }else if (typeof value === "boolean") {
                return !value
            }
        }

        expect(process('kurni')).toBe('KURNI');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
```

### alias type

```typescript
export type  Category =  {
    id: string;
    name:string;
}

export type Product = {
    id:string;
    name:string;
    price:number;
    category:Category
}
```

- call type from ../src/TypeAlias

```typescript
import { Category, Product } from "../src/TypeAlias"

describe('hello', function () {
    it("should say hello", function () {
        
        const category: Category = {
            id:'1',
            name:'handphone'
        }
        

        const product: Product = {
            id: '1',
            name: 'testing 1',
            price: 10000,
            category: category

        }

        console.log(product);
    })
})
```

- type alias for union
```typescript
export type ID = string | number

export type  Category =  {
    id: ID;
    name:string;
}

export type Product = {
    id:string;
    name:string;
    price:number;
    category:Category
}
```

### object Type

```typescript

const person: {id: string, name:string} = {
            id:'1',
            name:'kurniawan'

        }

        console.log(person);

        person.id = '10'
        person.name = "awan"
        
        console.log(person);
```


### optional
```typescript

const person: {id?: string,name:string} = {
name:'kurniawan'

}
console.log(person);
person.id = '10'
person.name = "awan"
console.log(person);
```

### enum
```typescript
export enum CustomerType {
    REGULAR,
    GOLD,
    PLATINUM
}
export type Customer =  {
    id:number;
    name:string;
    type:CustomerType

}

const customer:Customer = {
    id:1,
    name:'kurniawan',
    type: CustomerType.GOLD
}
console.log(customer);

```

### undifine and null
```typescript
function hello(name?:string | null) {
    if (name) {
        console.log(`hello ${name}`);
    }else{
        console.log('hello');
    }
}

hello('kurni');
const name: string | undefined = undefined
console.log(name);
```

### interface

```typescript

export interface Seller{
    id: number,
    name: string,
    address?:string,

}

const seller:Seller = {
    id:1,
    name: 'kurniawan'
}
console.log(seller);
```

- read only

```typescript
export interface Seller{
    id: number,
    name: string,
    address?:string,
    readonly nib:string
    readonly npwp:string

}

const seller:Seller = {
    id:1,
    name: 'kurniawan',
    nib: '123',
    npwp: '123'
}

seller.name = 'bakur'
seller.nib = '12345'
console.log(seller);
```

### function interface

```typescript
interface addFunction {
    (value1: number, value2: number) : number
}
const add: addFunction = (value1:number, value2:number):number => {
return value1 + value2
}
```

### index label interface

- araay
```typescript
interface stringArray {
            [index: number] : string
        }

        const name: stringArray = ['kurniawan']

        console.log(name);
```

- object

```typescript
interface stringDirectory {
    [key: string] : string
}

const name: stringDirectory = {
    'name' : 'kurniawan',
    'address' : 'coba'
}
console.log(name);
```

### extending interface
```typescript
export interface  Employe{
    id: string,
    name: string,
    description:string


}

export interface Manager extends Employe{
    numberOfEmployes:number
}


const employe:Employe = {
id:'1',
description: 'test',
name: 'kurniawan'
};

console.log(employe);
const manager:Manager = {
 id:'2',
 name:'kurniawan',
 description:'ada ada aja',
 numberOfEmployes:1
}

   console.log(manager);
```

### function in interface
```typescript
interface Person {
    name:string,
    hello(name: string) : string
    
}

const person:Person = {
    name: 'kurni',
    hello: function hello(name:string) : string {
        return `hello`
    }
}

console.log(person.hello("kurniawan"));
```


### intersection type

```typescript
interface Hasname { 
    name:string
}

interface HasId {
    id:string
}

type Domain = HasId & Hasname

const domain: Domain = {
    id: '1',
    name: 'kurniawan'
}

console.log(domain);

```

### type assertions
```typescript
export interface Person {
    name:string,
    hello(name: string) : string
    
}


const person: any = {
    name: "kurniawan",
    age: 30
};

const person2: Person = person as Person

console.log(person2);

```


