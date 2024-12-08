import sayHello from "../src/SayHello";

describe('SayHello', function () {
    it("should say hello", function () {
        expect(sayHello('kurniawan')).toBe('Hello kurniawan')
    });
});