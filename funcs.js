const year = 2023;
const startButton = document.querySelector(".image");
const rotate = document.querySelector(".rotate");
let resultNumber;

const messageArea = document.querySelector(".message");
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
  rotate.style.transform = `rotate(${s}deg)`;
}, 1000);

const onClick = () => {
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
};

startButton.addEventListener("click", onClick);
