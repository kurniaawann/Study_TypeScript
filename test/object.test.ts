describe('hello', function () {
    it("object", function () {
        
        const person: {id: string, name:string} = {
            id:'1',
            name:'kurniawan'

        }

        console.log(person);

        person.id = '10'
        person.name = "awan"
        
        console.log(person);

    })
})