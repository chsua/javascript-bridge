const InputView = require("./InputView") ;

describe("Input_test", () => {

    test("bridgeSize_범위 밖일때 오류", () => {
        expect( () => {
            InputView.bridgeSizeValidate(1) ;
        }).toThrow("[ERROR]")
    })

    test("bridgeSize_글자일때 오류", () => {
        expect( () => {
            InputView.bridgeSizeValidate("a") ;
        }).toThrow("[ERROR]")

    })

    test("moving_예외처리", () => {
        expect( () => {
            InputView.movingValidate("a") ;
        }).toThrow("[ERROR]")

    })
})



