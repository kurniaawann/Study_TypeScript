describe('Hello Ts', function () {
    it("tipe data any", function () {
        const person:any = {
            id:1,
            name:'kurniawan',
            age: 30
        }

        person.age = 31

        console.log(person);
    });   
    
})