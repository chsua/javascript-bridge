const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE, COMMAND, MESSAGE, ERROR } = require("./Constant");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
 const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine(MESSAGE.REQUEST_LENGTH, size => {
      try {
        this.bridgeSizeValidate(+size) ;
        callback(size) ;
      } catch (error) {
        MissionUtils.Console.print(error) ;
        this.readBridgeSize(callback) ;
      }
    })
  },

  bridgeSizeValidate(size){
    if ( !Number.isInteger(size) ) throw new Error (ERROR.ERROR_BRIDGE_LENGTH) ;
    if ( size < BRIDGE.LENGTH_MIN || size > BRIDGE.LENGTH_MAX ) throw new Error (ERROR.ERROR_BRIDGE_LENGTH) ;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    MissionUtils.Console.readLine(MESSAGE.REQUEST_UPDOWN, move => {
      try {
        this.movingValidate(move) ;
        callback(move) ;
      } catch (error) {
        MissionUtils.Console.print(error);
        this.readMoving(callback) ;
      }
    })
  },

  movingValidate(move){
    if ( move !== COMMAND.DOWN && move !== COMMAND.UP ) throw new Error (ERROR.ERROR_MOVE) ;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    try {

    } catch (error) {

    }
  }, 

  gameCommandValidate(command){

  },
};

module.exports = InputView;
