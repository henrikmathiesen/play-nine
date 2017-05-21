import Utils from './Utils';

describe('Utils provide helper method that the application needs for calculations', function () {

    describe('randomNumber', function () {
        it('returns a random number between 1 and 9', function () {
            let randomNumber = Utils.randomNumber();
            let expected = (randomNumber > 0) && (randomNumber < 10);
            expect(expected).toBe(true);
        });
    });

    describe('randomNumberNotSame', function () {
        it('returns a random number between 1 and 9, not them same as previous random number', function () { 
            let testHasRunInLoop = false;

            for(var i = 1; i < 10; i++) {
                let randomNumber = Utils.randomNumberNotSame(i);
                expect(randomNumber).not.toBe(i);
                testHasRunInLoop = true;
            }

            expect(testHasRunInLoop).toBe(true);
        });
    });
});
