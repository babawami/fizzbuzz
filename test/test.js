describe(' Write a program that prints the numbers from 1 to 100', function () {
    it('show fizz if the number it is multiply of 3 , return buzz if it is buzz , return fizzbuzz if it is multiply of 3 and 5', function () {
        let instance = factory();
        assert.deepEqual(instance.countNUmber(), [1, 2, "fuzz", 4, "buzz", "fuzz", 7, 8, "fuzz", "buzz", 11, "fuzz", 13, 14, "fizzbuzz", 16, 17, "fuzz", 19, "buzz", "fuzz", 22, 23, "fuzz", "buzz", 26, "fuzz", 28, 29, "fizzbuzz", 31, 32, "fuzz", 34, "buzz", "fuzz", 37, 38, "fuzz", "buzz", 41, "fuzz", 43, 44, "fizzbuzz", 46, 47, "fuzz", 49, "buzz", "fuzz", 52, 53, "fuzz", "buzz", 56, "fuzz", 58, 59, "fizzbuzz", 61, 62, "fuzz", 64, "buzz", "fuzz", 67, 68, "fuzz", "buzz", 71, "fuzz", 73, 74, "fizzbuzz", 76, 77, "fuzz", 79, "buzz", "fuzz", 82, 83, "fuzz", "buzz", 86, "fuzz", 88, 89, "fizzbuzz", 91, 92, "fuzz", 94, "buzz", "fuzz", 97, 98, "fuzz", "buzz"]);
    })
});