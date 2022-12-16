const InputView = require("./InputView") ;

describe("Input_test", () => {

    test("bridgeSize_범위 밖", () => {
        expect( () => {
            InputView.bridgeSizeValidate(1) ;
        }).toThrow("[ERROR]")
    })

    test("bridgeSize_글자", () => {
        expect( () => {
            InputView.bridgeSizeValidate("a") ;
        }).toThrow("[ERROR]")

    })
})



