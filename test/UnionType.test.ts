describe('Hello Ts', function () {
    it("union", function () {
        let sample:number | string | boolean = "kurni";
        console.log(sample);

        sample = 100;
        console.log(sample);

        sample = true;
        console.log(sample);

    });
    
    
    it("union", function () {
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

    });   


    
})