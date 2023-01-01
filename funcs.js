const results = [""];
const year = 2023;
let gameFlg = false;
const startButton = document.querySelector(".image");
const rotate = document.querySelector(".rotate");
const result = document.querySelector(".result");
const messageArea = document.querySelector(".message");
let resultNumber;

var msg_buff = "";
function message(msg) {
  if (msg_buff == "") {
    msg_buff += msg + "\n";
    message_char();
  } else {
    msg_buff += msg + "\n";
  }
}
function message_char() {
  if (msg_buff == "") {
    //メッセージバッファに文字がなければ何もしない
    return;
  }
  //メッセージバッファの先頭1文字を取得
  var c = msg_buff.slice(0, 1);
  if (c == "\n") {
    c = "<br>"; //改行の場合はタグへ変換
  }

  messageArea.innerHTML += c;
  //メッセージバッファから先頭1文字を削除
  msg_buff = msg_buff.slice(1);
  //
  setTimeout("message_char()", 60);
}

const rotateImage = setInterval(() => {
  const date = new Date();
  // 秒針:1周を60で割って、1秒あたりの角度を計算する
  const s = (360 / 60) * date.getSeconds();
  rotate.style.transform = `translate(-50%, -50%) rotate(${s}deg)`;
}, 1000);

const showResult = (resultNumber) => {
  const title = `${resultNumber}等賞!`;
  let resultMessage;
  if (resultNumber === 0) {
    resultMessage = "どんな困難も、一撃解決！";
  }
  message(title + resultMessage);
  startButton.addEventListener("click", onClick);
  startButton.style.pointerEvents = "auto";
};

const onClick = () => {
  startButton.style.pointerEvents = "none";
  messageArea.innerHTML = "";
  if (gameFlg) {
    message("返事がない、ただのフリーイラストのようだ。");
    return;
  }
  gameFlg = true;
  startButton.classList.remove("rotate");
  clearInterval(rotateImage); //回転停止

  const today = new Date();
  const seconds = today.getSeconds();
  if (seconds === 0) {
    resultNumber = 0;
  } else {
    resultNumber = year % seconds;
  }
  console.log({ resultNumber });

  message(`${year} を ${seconds} で割ったあまりは、、、      ${resultNumber}`);
  setTimeout(() => showResult(resultNumber), 4000);
};

startButton.addEventListener("click", onClick);
