const BRIDGE = {
    LENGTH_MIN: 3,
    LENGTH_MAX: 20,
    UP: 1,  // 1이 나와야 윗칸이 갈 수 있는 것
    DOWN: 0,
}

const COMMAND = {
    UP: "U",
    DOWN: "D",
    REGAME: "R",
    QUIT: "Q",
}

const MESSAGE = {
    START: "다리 건너기 게임을 시작합니다.",
    END_FIRST: "최종 게임 결과",
    END_SECOND: "게임 성공 여부: ",
    END_THIRD: "총 시도한 횟수: ",
}

const ERROR = {
    ERROR_BRIDGE_LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    ERROR_MOVE: "[ERROR] U 또는 D을 입력해주세요.",
    ERROR_REGAME: "[ERROR] R 또는 Q을 입력해주세요.",
}

module.exports = { BRIDGE, COMMAND, MESSAGE, ERROR } ;