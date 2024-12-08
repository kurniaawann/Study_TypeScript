import { Employe, Manager } from "../src/employi";
import { Seller } from "../src/interface";
import { Person } from "../src/person";



describe('hello', function () {
    it("interface", function () {
        
    const seller:Seller = {
        id:1,
        name: 'kurniawan',
        nib: '123',
        npwp: '123'
    }
    seller.name = 'bakur'
    console.log(seller);
    })

    it('function interface', function () {
        interface addFunction {
        (value1: number, value2: number) : number
        }

        const add: addFunction = (value1:number, value2:number):number => {
            return value1 + value2
        } 

        expect(add(2,2)).toBe(4)
    })

    it('array interface', function () {
        interface stringArray {
            [index: number] : string
        }

        const name: stringArray = ['kurniawan']

        console.log(name);
    })

    it('object interface', function () {
        interface stringDirectory {
            [key: string] : string
        }

        const name: stringDirectory = {
            'name' : 'kurniawan',
            'address' : 'coba'
        }
        console.log(name);
    })

    it('extending interface', function () {
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
    })

    it('function in interface', function () {
        

        const person:Person = {
            name: 'kurni',
            hello: function hello(name:string) : string {
                return `hello`
            }
        }

        console.log(person.hello("kurniawan"));
     })

    it('intersection type', function () {
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
     })
    it('type assertions', function () {
        const person: any = {
            name: "kurniawan",
            age: 30
        };

        const person2: Person = person as Person

        console.log(person2);
     })


})

