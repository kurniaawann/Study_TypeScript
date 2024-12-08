describe('hello', function () {
    it("optional", function () {
        
        const person: {id?: string,name:string} = {
            
            name:'kurniawan'

        }

        console.log(person);

        person.id = '10'
        person.name = "awan"
        
        console.log(person);

    })
})