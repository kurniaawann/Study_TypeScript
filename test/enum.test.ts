import { Customer, CustomerType } from "../src/enum";


describe('hello', function () {
    it("Enum", function () {
        
    const customer:Customer = {
        id:1,
        name:'kurniawan',
        type: CustomerType.GOLD
    }
    console.log(customer);

    })
})
