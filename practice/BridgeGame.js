const BridgeMaker = require("./BridgeMaker")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator")
const { BRIDGE, COMMAND, MESSAGE, ERROR } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
    #correctBridge
    #nowSpot

    constructor(num){
      this.#correctBridge = this.makeRandomBridge(num) ;
      this.gameCount = 1 ;
      this.userBridge = [[],[]] ;
      this.#nowSpot = 0 ;
    }


    /**
     * User에게 숫자를 받아 정답다리를 만드는 함수
     * @param {number} num User에게 받은 다리의 길이
     */
    makeRandomBridge(num){
      return BridgeMaker.makeBridge(num, BridgeRandomNumberGenerator.generate)
    }
  
    /**
     * 사용자가 칸을 이동할 때 사용하는 메서드
     * <p>
     * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    move(command) {    //전진, 실패, 성공
      if (command == this.#correctBridge[this.#nowSpot]){
        this.addBridge(command, "O")
        this.#nowSpot++
        if (this.isEnd()) return "success" ;
        return "go" ;
      } 
      this.addBridge(command, "X")
      return "stop" ;
    }
  
    /**
     * 사용자가 게임을 다시 시도할 때 사용하는 메서드
     * <p>
     * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    retry(command) {
      if (command === COMMAND.REGAME){
        this.#nowSpot = 0 ;
        this.userBridge = [[],[]] ;
        this.gameCount += 1 ;
        return true
      } 
      return false
    }

    isEnd(){
      return (this.#nowSpot === this.#correctBridge.length ) 
    }

    addBridge(command, xo ){
      if (command === COMMAND.DOWN ) {
        this.userBridge[0].push("   ")
        this.userBridge[1].push(` ${xo} `)
      } else {
        this.userBridge[1].push("   ")
        this.userBridge[0].push(` ${xo} `)
      }
    }

  }

  module.exports = BridgeGame;
