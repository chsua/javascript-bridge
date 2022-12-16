const BridgeMaker = require("./BridgeMaker")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator")

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
    #correctBridge
    #gameCount
    #userBridge

    constructor(num){
      this.#correctBridge = this.makeRandomBridge(num) ;
      this.#gameCount = 1 ;
      this.#userBridge = [[],[]] ;
    }


    /**
     * User에게 숫자를 받아 정답다리를 만드는 함수
     * @param {number} num User에게 받은 다리의 길이
     */
    makeRandomBridge(num){
      BridgeMaker.makeBridge(num, BridgeRandomNumberGenerator)
    }
  
    /**
     * 사용자가 칸을 이동할 때 사용하는 메서드
     * <p>
     * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    move() {

    }
  
    /**
     * 사용자가 게임을 다시 시도할 때 사용하는 메서드
     * <p>
     * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    retry() {
      
    }

    pushBridge(){

    }
  }
  
  module.exports = BridgeGame;
