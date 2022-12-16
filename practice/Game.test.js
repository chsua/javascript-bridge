const InputView = require("./InputView") ;
const BridgeMaker = require("./BridgeMaker") ;
const BridgeGame = require("./BridgeGame") ;

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

describe("BridgeGame", () => {
    test("유저 다리 추가 만들기",()=>{
        const bridgeGame = new BridgeGame();
        bridgeGame.addBridge("U", "O" )
        expect(bridgeGame.userBridge).toEqual([[" O "],["   "]])
    })

    test("유저 다리 추가 만들기",()=>{
        const bridgeGame = new BridgeGame();
        bridgeGame.addBridge("D", "O" )
        bridgeGame.addBridge("U", "X" )
        expect(bridgeGame.userBridge).toEqual([["   "," X "],[" O ","   "]])
    })

})
