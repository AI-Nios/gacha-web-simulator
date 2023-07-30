// キャラクターリスト（仮のデータ）
const characters = [
  { name: "キャラクター1", image: "https://pbs.twimg.com/media/F1FWVx3aYAEfpoE?format=jpg&name=medium" },
  { name: "キャラクター2", image: "characters/character (2).jpg" },
  { name: "キャラクター3", image: "characters/character (3).jpg" },
  { name: "キャラクター4", image: "characters/character (4).jpg" },
  { name: "キャラクター5", image: "characters/character (5).jpg" },
  { name: "キャラクター6", image: "characters/character (6).jpg" },
  { name: "キャラクター7", image: "characters/character (7).jpg" },
  { name: "キャラクター8", image: "characters/character (8).jpg" },
  { name: "キャラクター9", image: "characters/character (9).jpg" },
  { name: "キャラクター10", image: "characters/character (10).jpg" },
  { name: "キャラクター11", image: "characters/character (11).jpg" },
  { name: "キャラクター12", image: "characters/character (12).jpg" },
  { name: "キャラクター13", image: "characters/character (13).jpg" },
  { name: "キャラクター14", image: "characters/character (14).jpg" },
  { name: "キャラクター15", image: "characters/character (15).jpg" },
  { name: "キャラクター16", image: "characters/character (16).jpg" },
  // 他のキャラクターのデータを追加
];

// ガチャを回す処理
function startSpin() {
  const spinButton = document.getElementById("spin-button");
  spinButton.disabled = true; // ガチャボタンを無効化
  
  const iconContainer = document.querySelector(".icon-container");
  iconContainer.classList.add("spin-animation"); // 回転アニメーションのクラスを追加
  // 回転アニメーションの開始（適切な実装が必要）

  setTimeout(() => {
    // 結果の抽選処理
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selectedCharacter = characters[randomIndex];

    // 結果の表示
    showResult(selectedCharacter);
    
    setTimeout(() => {
      iconContainer.classList.remove("spin-animation"); // 回転アニメーションのクラスを削除
      spinButton.disabled = false; // ガチャボタンを再度有効化
    }, 1000); // アイコンを最初の位置に戻すまでの時間
  }, 1000); // 2秒後に結果を表示
}

const iconLink = document.getElementById("icon-link");
const iconImage = document.getElementById("icon-image");

// ガチャの画像をクリックしたらURLに遷移する
iconLink.addEventListener("click", function(event) {
  event.preventDefault(); // デフォルトのクリック動作をキャンセル
  const url = iconImage.src;
  window.location.href = url;
});

// 結果の表示処理
function showResult(character) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `
    <h3>${character.name}</h3>
    <img src="${character.image}" alt="${character.name}">
  `;
}

// ガチャボタンにクリックイベントを追加
const spinButton = document.getElementById("spin-button");
spinButton.addEventListener("click", startSpin);
