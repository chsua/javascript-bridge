const BridgeGame = require("./BridgeGame") ;
const InputView = require("./InputView") ;
const OutputView = require("./OutputView") ;




class App {

  play() {
    OutputView.start() ;
    InputView.readBridgeSize(this.bridgeSizeCallback.bind(this)) ;
  }

  bridgeSizeCallback(size){
    this.game = new BridgeGame(size) ;
    InputView.readMoving(this.moveCallback.bind(this)) ;
  }

  moveCallback(command){
    const result = this.game.move(command) ;
    OutputView.printMap(this.game.userBridge) ; 
    if ( result === "go" ) {
      InputView.readMoving(this.moveCallback.bind(this)) ;
    } else if ( result === "success" ) {
      OutputView.printResult(true,this.game.userBridge,this.game.gameCount)
    } else {
      InputView.readGameCommand(this.regameCallback.bind(this)) 
    } 
  }

  regameCallback(command){
    if (this.game.retry(command)) InputView.readMoving(this.moveCallback.bind(this)) ;
    else OutputView.printResult(false,this.game.userBridge,this.game.gameCount)
  }

}

const app = new App();
app.play() ;
  
module.exports = App;
  

