describe('hello', function () {
    it("Function", function () {
        
        function sayHello(name: string): string {
            return `Hello ${name}`
        }
        function test(name: string): string {
            return name.toUpperCase()
        }


        console.log(sayHello('kurniawan'));
        
        function myName(): void {
            console.log('kurniawan');
        }

        console.log(myName());
    })

    it("Function overloading", function () {
        
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any):any {
            if (typeof value === "string") {
                return value.toUpperCase();
            }else if (typeof value === "number"){
                return value + 2
            }
        }

        expect(callMe('kurniawan')).toBe("KURNIAWAN");
        expect(callMe(2)).toBe(4);

    });

    it("Function parameter", function () {
        
        function sayHello(name:string, filter: (name:string)=> string){
            return `Hello ${filter(name)}`;
        }

        function toUpperCase(name: string): string {
            return name.toUpperCase()
        }

        console.log((sayHello('kurniawan', toUpperCase)));

    })


})


