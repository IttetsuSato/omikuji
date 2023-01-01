const results = [
  {
    content: "ブラボー！！！",
    url: "https://www.youtube.com/watch?v=6wpB1WnEe6A",
  },
  {
    content: "あつまれ！パーティーピーポー",
    url: "https://www.youtube.com/watch?v=J5oytYDMWHA",
  },
  {
    content: "大人のにこるん",
    url: "https://www.oricon.co.jp/news/2155420/photo/1/",
  },
  {
    content: "メンズにおすすめサンオイル",
    url: "https://maison-okada.tokyo/2019/12/18/sunoil/",
  },
  {},
  {},
  {},
  //7
  {
    content: "ラッキーセブン！！！",
    url: "https://www.youtube.com/watch?v=MzHV_W8XmTs",
  },
  {
    content: "つぼ八のロゴ",
    url: "https://www.google.com/search?q=%E3%83%AD%E3%82%B4+%E3%81%A4%E3%81%BC%E5%85%AB&tbm=isch&rlz=1C5CHFA_enJP1008JP1008&hl=ja&sa=X&ved=2ahUKEwiLn6uE_qX8AhXGFYgKHaJsC6wQrNwCKAB6BQgBEI4C&biw=1728&bih=969",
  },
  {
    content: "クジャク",
    url: "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%82%B8%E3%83%A3%E3%82%AF",
  },
  {
    content: "十種競技選手",
    url: "https://twitter.com/ushirokeisuke?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {},
  {},
  //13
  {
    content: "ジュンサーさん",
    url: "https://dic.pixiv.net/a/%E3%82%B8%E3%83%A5%E3%83%B3%E3%82%B5%E3%83%BC%E3%81%95%E3%82%93",
  },
  {
    content: "ジューC",
    url: "https://www.kabaya.co.jp/catalog/juicy/",
  },
  {},
  {},
  //17
  {
    content: "伊藤純菜写真集「ありのままの姿」",
    url: "https://prtimes.jp/main/html/rd/p/000000010.000071011.html",
  },
  {},
  {},
  {},
  //21
  {
    content: "拳",
    url: "https://www.youtube.com/watch?v=favID2rXfmQ",
  },
  {
    content: "拳",
    url: "https://www.youtube.com/watch?v=favID2rXfmQ",
  },
  {
    content: "拳",
    url: "https://www.youtube.com/watch?v=favID2rXfmQ",
  },
  {
    content: "拳",
    url: "https://www.youtube.com/watch?v=favID2rXfmQ",
  },
  {
    content: "拳",
    url: "https://www.youtube.com/watch?v=favID2rXfmQ",
  },
  {},
  {},
  //28
  {
    content: "ニッパー",
    url: "https://www.amazon.co.jp/%E3%83%8B%E3%83%83%E3%83%91-%E5%B7%A5%E5%85%B7-%E9%80%9A%E8%B2%A9/b?ie=UTF8&node=2039354051",
  },
  {},
  {},
  {},
  {},
  {},
  //34
  {
    content: "サニーゴ",
    url: "https://zukan.pokemon.co.jp/detail/222",
  },
  {},
  {},
  {},
  {},
  {},
  //40
  {},
  {},
  {},
  {
    content: "ヨン様",
    url: "https://yongjoon.jp/",
  },
  {},
  {
    content: "ジョイ",
    url: "https://www.myrepi.com/brands/joy/",
  },
  {},
  {
    content: "岸田文雄公式サイト",
    url: "https://kishida.gr.jp/",
  },
  {},
  {},
  {},
  {
    content: "ゴキブリがいなくなるスプレー",
    url: "https://www.kincho.co.jp/seihin/insecticide/go_aerosol/gokiburi_n_spray/index.html",
  },
];
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
  if (typeof resultNumber !== "number") {
    message("フッキン100回、代わりにワってクダさい。");
  } else {
    const title = `${resultNumber}等賞!`;
    message(title);
    setTimeout(() => {
      messageArea.innerHTML += `<a href=${results[resultNumber].url}>${results[resultNumber].content}</a>`;
    }, 500);
  }
  startButton.addEventListener("click", onClick);
  startButton.style.pointerEvents = "auto";
};

const onClick = () => {
  startButton.style.pointerEvents = "none";
  messageArea.innerHTML = "";
  if (gameFlg) {
    message("返事がない、ただのフリーイラストのようだ。");
    message("ページを再リロードしてください。");
    return;
  }
  gameFlg = true;
  startButton.classList.remove("rotate");
  clearInterval(rotateImage); //回転停止

  const today = new Date();
  const seconds = today.getSeconds();
  if (seconds === 0) {
    resultNumber = "ワリキレません";
  } else {
    resultNumber = year % seconds;
  }
  console.log({ resultNumber });

  message(`${year} を ${seconds} で割ったあまりは、、、${resultNumber}`);
  setTimeout(() => showResult(resultNumber), 2500);
};

startButton.addEventListener("click", onClick);

for (let i = 1; i < 60; i++) {
  console.log(`2023 % ${i} = ${2023 % i}`);
}
