describe('Hello Ts', function () {
    it("tipe data array", function () {
        const nameFruit: string[] = ["apple", "watermelon", "manggo"];
        const values: number[] = [1,2,3,4]
        console.log(nameFruit);
        console.log(values);
    });   
    
    
    it("read only array", function () {
        const hobbies: ReadonlyArray<string> = ["read", "watch"]
        
        console.log(hobbies[1]);
    });


    it("tupple array", function () {
        const person: readonly [string, string, number] = ['kurniawan', 'typescript', 1];
        console.log(person[0]);
    });
    
    
})