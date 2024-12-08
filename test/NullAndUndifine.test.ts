

describe('hello', function () {
    it("null and undifine", function () {
        
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


    })
})

