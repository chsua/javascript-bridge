const InputView = require("./InputView") ;
const BridgeMaker = require("./BridgeMaker") ;

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

    test("gameCommand_예외처리", () => {
        expect( () => {
            InputView.gameCommandValidate("a") ;
        }).toThrow("[ERROR]")

    })

})

describe("BridgeMaker", () => {
    test("다리생성 기능확인", () => {
        const returnOne = () => {
            return 1
        }
        expect(BridgeMaker.makeBridge(3,returnOne)).toEqual(["U","U","U"])
    })

    test("다리생성 기능확인_2", () => {
        const returnZero = () => {
            return 0
        }
        expect(BridgeMaker.makeBridge(4,returnZero)).toEqual(["D","D","D","D"])
    })

})
