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