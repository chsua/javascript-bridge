const BridgeGame = require("./BridgeGame") ;
const InputView = require("./InputView") ;
const OutputView = require("./OutputView") ;




class App {
  play() {
    OutputView.start() ;

  }

  bridgeSizeCallback(size){
    const game = new BridgeGame(size) ;
    InputView.readMoving(this.moveCallback) ;
  }

  moveCallback(command){
  }

  regameCallback(){

  }

}
  
module.exports = App;
  

