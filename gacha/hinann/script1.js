// キャラクターリスト（仮のデータ）
const characters = [
    // R
    { name: "R: 牛柄ビキニ", image: "https://pbs.twimg.com/media/F1k_c14aIAARJkf?format=jpg&name=medium" , rarity: "R",url: "https://twitter.com/ai_nios/status/1682445728474628098?s=20" },
    { name: "R: 完璧なプロポーション", image: "https://pbs.twimg.com/media/F1aapRGaQAUHxNh?format=jpg&name=large" , rarity: "R", url: "https://twitter.com/ai_nios/status/1681861489534341120?s=20"},
    { name: "R: 「ひと休みしよ♪」", image: "https://pbs.twimg.com/media/F1UzBxIagAAXNcE?format=jpg&name=medium" , rarity: "R",url: "https://twitter.com/ai_nios/status/1681499099546415104?s=20" },
    { name: "R: キス待ち", image: "https://pbs.twimg.com/media/F1PAztbaUAAKTHG?format=jpg&name=medium" , rarity: "R", url: "https://twitter.com/ai_nios/status/1681136714461396993?s=20"},
    { name: "R: meow", image: "https://pbs.twimg.com/media/F1NN5ZzaEAAaIro?format=jpg&name=large" , rarity: "R",url: "https://twitter.com/ai_nios/status/1680864929908412416?s=20" },
    { name: "R: えっすぎる…", image: "https://pbs.twimg.com/media/F1NN0NXaMAANjEe?format=jpg&name=medium" , rarity: "R", url: "https://twitter.com/ai_nios/status/1680774327984324609?s=20"},
    { name: "R: バランスボール", image: "https://pbs.twimg.com/media/F1FWVx3aYAEfpoE?format=jpg&name=large" , rarity: "R", url: "https://twitter.com/ai_nios/status/1680219072112525312?s=20"},
    { name: "R: 朝チュン", image: "https://pbs.twimg.com/media/F0_raSpaQAAvvhz?format=jpg&name=large" , rarity: "R",url: "https://twitter.com/ai_nios/status/1679989150592688130?s=20" },
    { name: "R: たまには息き抜きも必要だよ", image: "https://pbs.twimg.com/media/F06vfmeaQAAqLTA?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1679473263850946560?s=20"},
    { name: "R: 今週も頑張ろう✨", image: "https://pbs.twimg.com/media/F0myuRFaMAEOTXx?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1678068847512006657?s=20"},
    { name: "R: 黒ビキニまじ最高！", image: "https://pbs.twimg.com/media/F0RqsPdaAAM-NcU?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1676586643761819652?s=20"},
    { name: "R: スタイル良すぎ", image: "https://pbs.twimg.com/media/F0FX5GYagAA28AJ?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1675717179197784064?s=20"},
    { name: "R: セクシーショット", image: "https://pbs.twimg.com/media/F0AE4LHaUAI1aMg?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1675344436564463621?s=20"},
    { name: "R: 本日の一枚", image: "https://pbs.twimg.com/media/FzzAJ8ZaQAIz5s1?format=png&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1674432545814085633?s=20"},
    { name: "R: かわいすぎ", image: "https://pbs.twimg.com/media/Fzo01HQakAMkD-8?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1673708519630213120?s=20"},
    { name: "R: 見えてます", image: "https://pbs.twimg.com/media/Fzjx1PqaIAgco6z?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1673353163158745089?s=20"},
    { name: "R: お昼きゅーけい", image: "https://pbs.twimg.com/media/FzhTmS_aEAII0wk?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1673179814998728708?s=20"},
    { name: "R: おはよ", image: "https://pbs.twimg.com/media/FzfH35VaIAAz3Dk?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1673025755914305536?s=20"},
    { name: "R: ご機嫌斜めな様子", image: "https://pbs.twimg.com/media/Fza71jKaAAAr8UR?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1672731322933207040?s=20"},
    { name: "R: 頑張りましょう！", image: "https://pbs.twimg.com/media/Fy__bAQaUAA9PEW?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1670989851943108608?s=20"},
    { name: "R: チア！！", image: "https://pbs.twimg.com/media/Fy_tw4JaMAIDy1x?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1670815414304264192?s=20"},
    { name: "R: 最近低浮上ぎみ…", image: "https://pbs.twimg.com/media/FyhXMf2aQAU0tzB?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1668679537981530113?s=20"},
    { name: "R: かわいい", image: "https://pbs.twimg.com/media/FyG_QwtakAg0cdN?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1666823635263430659?s=20"},
    { name: "R: もう日曜が終わってしまう。。。", image: "https://pbs.twimg.com/media/FxMc43vaMAAeHBD?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1662821023149084672?s=20"},
    { name: "R: かわいい", image: "https://pbs.twimg.com/media/FxMdhB5aIAEnfzX?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1662715329347301376?s=20"},
    { name: "R: おはようございます", image: "https://pbs.twimg.com/media/FxIuoDbakAAVq_V?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1662594537699651586?s=20"},
    { name: "R: 腋チェック", image: "https://pbs.twimg.com/media/FxEngOxagAAZR8p?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1662154559652007937?s=20"},
    { name: "R: サービスショット", image: "https://pbs.twimg.com/media/Fw4XaQ0acAEBw9K?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1661295986239578115?s=20"},
    { name: "R: おはよー", image: "https://pbs.twimg.com/media/Fw0uaJLagAEtP1C?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1661129882699714561?s=20"},
    { name: "R: こりゃやべぇぞ.....!!", image: "https://pbs.twimg.com/media/FwgPfiVacAImETG?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1659755828390264833?s=20"},
    { name: "R: 「はわわわ...」", image: "https://pbs.twimg.com/media/FwbSd1SaYAE3XIW?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1659302841163341826?s=20"},
    { name: "R: お姫様抱っこ", image: "https://pbs.twimg.com/media/FwVuaKiWAAo759h?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1659031055788044291?s=20"},
    { name: "R: おやすみ", image: "https://pbs.twimg.com/media/FwUOLYuacAIi5k9?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1658849877936291844?s=20"},
    { name: "R: なんかすごいジャケット", image: "https://pbs.twimg.com/media/FwUMRfWaEAE6NDr?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1658759259683692545?s=20"},
    { name: "R: Horizon", image: "https://pbs.twimg.com/media/FwPsXn0aIAANUz5?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1658429577931419650?s=20"},
    { name: "R: 本日もお疲れさまです😌", image: "https://pbs.twimg.com/media/FwK2pn2aEAAZZQH?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1658089212007309315?s=20"},   
    { name: "R: 絶対に見えないのである", image: "https://pbs.twimg.com/media/FvUp29GaEAANOUN?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1654274465726078978?s=20"},
    { name: "R: ゲーマー", image: "https://pbs.twimg.com/media/FvS-vzoaUAA7T3x?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1654156695625400329?s=20"},
    { name: "R: 童殺セーター", image: "https://pbs.twimg.com/media/Fu4SzVKaAAIM3aQ?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1652278789697855488?s=20"},
    { name: "R: ゲーマーな彼女", image: "https://pbs.twimg.com/media/Fupi1aQWYAALQVU?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1651241385268334596?s=20"},
    { name: "R: ブルマ姿", image: "https://pbs.twimg.com/media/FuU1N9waEAE6QYA?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1649789907697557504?s=20"},
    { name: "R: お疲れ様", image: "https://pbs.twimg.com/media/FtmtiiJagAIg2iq?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1646770269091155968?s=20"},
    { name: "R: 自撮りニオちゃん", image: "https://pbs.twimg.com/media/Ftir-dyaIAA0i-x?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1646255443352879104?s=20"},
    { name: "R: バニーガール", image: "https://pbs.twimg.com/media/FtR5ybMaMAAq_tW?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1645079122992037894?s=20"},
    { name: "R: しっぽ", image: "https://pbs.twimg.com/media/FtL28XlaAAAYVnm?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1644648334530060289?s=20"},
    { name: "R: 朝にはめっぽう弱いニオちゃん", image: "https://pbs.twimg.com/media/Fspzv0waMAAWzsn?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1642255511717400576?s=20"}, 
    { name: "R: オーバーオールビキニ", image: "https://pbs.twimg.com/media/FsedgXlagAIDg7X?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1641454986575118342?s=20"},
    { name: "R: 今日は黒パンらしい", image: "https://pbs.twimg.com/media/FrlsuQ7akAAxcML?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1637460573482016768?s=20"},
    { name: "R: 鋭い目付き", image: "https://pbs.twimg.com/media/FrgBa3AacAAw8gk?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1637060033245773825?s=20"},
    { name: "R: 元気出しな？", image: "https://pbs.twimg.com/media/FrRWJXxaUAA0MHg?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1636200614404280322?s=20"},
    { name: "R: お昼のパンツ", image: "https://pbs.twimg.com/media/FrOpssJaEAEbQbU?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1635838228833132544?s=20"}, 
    { name: "R: お疲れモード", image: "https://pbs.twimg.com/media/FrGrDo3aEAENc_T?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1635294392700289024?s=20"},
    { name: "R: JKニオちゃん", image: "https://pbs.twimg.com/media/FrDuBH8aAAADhwO?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1635069858290499585?s=20"},
    { name: "R: バンド組まない？", image: "https://pbs.twimg.com/media/FqyUWjqaIAUDP_B?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1633845099909062656?s=20"},
    { name: "R: サイバーパンク風", image: "https://pbs.twimg.com/media/FqrnhIVaUAEqnI3?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1633392125055504385?s=20"},
    { name: "R: セクシーすぎる", image: "https://pbs.twimg.com/media/Fqb8h_XaIAAYQwS?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1632304952671444992?s=20"},
    { name: "R: ご褒美にどうぞ", image: "https://pbs.twimg.com/media/FqYOFjGaEAEZNpc?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1632033157922058242?s=20"},
    { name: "R: ブルマのお尻をどうぞ", image: "https://pbs.twimg.com/media/Fp3T85YaAAIMMeX?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1629722935526326274?s=20"},
    { name: "R: お気に入り", image: "https://pbs.twimg.com/media/Fpx_W8XaEAEKAI8?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1629317203689607168?s=20"},
    { name: "R: にゃんにゃんにゃん", image: "https://pbs.twimg.com/media/FpjIbnFaAAAAuqA?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1628318687596797953?s=20"},
    { name: "R: バニーが家にやってきた", image: "https://pbs.twimg.com/media/FpVELq-aEAIl3zQ?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1627321859707650050?s=20"}, 
    { name: "R: 10000フォロワーありがとうございます✨", image: "https://pbs.twimg.com/media/FpMvitkacAUP7xX?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1626778538627014658?s=20"},
    { name: "R: バレンタイン♪", image: "https://pbs.twimg.com/media/Fo7E8ysaEAAAenP?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1625453559432253442?s=20"},
    { name: "R: 今日からチアガール", image: "https://pbs.twimg.com/media/FosUqU9aAAItxG2?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1624422756803833856?s=20"},
    { name: "R: とっておきの一枚", image: "https://pbs.twimg.com/media/FoXo6wvaUAAk92c?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1622973461705682945?s=20"},
    { name: "R: マジで一番好きかも", image: "https://pbs.twimg.com/media/FnyY-UxaIAMyITF?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1620436890238308356?s=20"}, 
    { name: "R: こ、、これは。。", image: "https://pbs.twimg.com/media/FnuyMmEaQAA8IqS?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1620085407546482688?s=20"},
    { name: "R: おパンツの時間です", image: "https://pbs.twimg.com/media/FnmucVraAAAeVYn?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1619530782728458244?s=20"},
    { name: "R: Vデビューさせたい", image: "https://pbs.twimg.com/media/FniMZnOaYAEdpt9?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1619199655019180033?s=20"},
    { name: "R: 超セクシー", image: "https://pbs.twimg.com/media/FnU9xkwakAEsLsV?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1618267800862355456?s=20"},
    { name: "R: グラビアデビュー", image: "https://pbs.twimg.com/media/FnQc9PoaMAEAHKb?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1618081355220373505?s=20"}, 
    { name: "R: 「こっちおいで」", image: "https://pbs.twimg.com/media/FnQTmsMaYAI5JKO?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1617939799125676033?s=20"},
    { name: "R: えっちなおしり", image: "https://pbs.twimg.com/media/FnJWXrNaAAABJ5L?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1617537777138114563?s=20"},
    { name: "R: もうほんと可愛い", image: "https://pbs.twimg.com/media/FnFEKu6acAAhYDB?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1617175377108951041?s=20"},
    { name: "R: 「またパンツ見てる...」", image: "https://pbs.twimg.com/media/Fm6_7hTakAEGDrA?format=jpg&name=medium" , rarity: "R", url:"https://twitter.com/ai_nios/status/1616450482339303425?s=20"},
    { name: "R: 「私を君の推しにしてくれませんか？」", image: "https://pbs.twimg.com/media/Fmm3OQ-aAAIvh4R?format=jpg&name=large" , rarity: "R", url:"https://twitter.com/ai_nios/status/1615030718828269568?s=20"}, 
 
    // SR
    { name: "SR: モーモービキニ１", image: "characters/SR/SR (1).png" , rarity: "SR", url: "characters/SR/SR (1).png"},
    { name: "SR: モーモービキニ２", image: "characters/SR/SR (2).png" , rarity: "SR", url: "characters/SR/SR (2).png"},
    { name: "SR: 陸上", image: "characters/SR/SR (3).png" , rarity: "SR", url: "characters/SR/SR (3).png"},
    { name: "SR: バニーガール", image: "characters/SR/SR (4).png" , rarity: "SR", url: "characters/SR/SR (4).png"},
    // SSR
    { name: "SSR: 見られちゃった", image: "characters/SSR/SSR (1).jpg" , rarity: "SSR", url: "characters/SSR/SSR (1).jpg"},
    { name: "SSR: ボディスーツ１", image: "characters/SSR/SSR (2).jpg" , rarity: "SSR", url: "characters/SSR/SSR (2).jpg"},
    { name: "SSR: ボディスーツ２", image: "characters/SSR/SSR (3).jpg" , rarity: "SSR", url: "characters/SSR/SSR (3).jpg"},
    { name: "SSR: 無防備な身体", image: "characters/SSR/SSR (4).png" , rarity: "SSR", url: "characters/SSR/SSR (4).png"},
    // 他のキャラクターのデータを追加
];

const collectedCharacters = [];

  // ガチャを回す処理
function startSpin() {
    const spinButton = document.getElementById("spin-button");
    spinButton.disabled = true; // ガチャボタンを無効化
    
    const iconContainer = document.querySelector(".icon-container");
    iconContainer.classList.add("spin-animation"); // 回転アニメーションのクラスを追加
    // 回転アニメーションの開始（適切な実装が必要）
    
    spinButton.classList.add("button-click-animation"); // クリックアニメーションのクラスを追加
  
    setTimeout(() => {
        // 結果の抽選処理
        const randomValue = Math.random() * 100; // 0から100までのランダムな数値を生成
        let selectedCharacter;
    
        if (randomValue <= 80) {
          // 80%の確率でレア度1 (R)
          selectedCharacter = getRandomCharacterByRarity("R");
        } else if (randomValue <= 99) {
          // 19%の確率でレア度2 (SR)
          selectedCharacter = getRandomCharacterByRarity("SR");
        } else {
          // 1%の確率でレア度3 (SSR)
          selectedCharacter = getRandomCharacterByRarity("SSR");
        }

        // コレクションに追加
        collectCharacter(selectedCharacter);

        setTimeout(() => {
          spinButton.classList.remove("button-click-animation"); // クリックアニメーションのクラスを削除
          spinButton.disabled = false; // ガチャボタンを再度有効化
        }, 300); // アニメーションが完了するまでの時間
        
        // 結果の表示
        showResult(selectedCharacter);
      
        setTimeout(() => {
            iconContainer.classList.remove("spin-animation"); // 回転アニメーションのクラスを削除
            spinButton.disabled = false; // ガチャボタンを再度有効化
      }, 1000); // アイコンを最初の位置に戻すまでの時間
    }, 1000); // 2秒後に結果を表示
}

// レア度に基づいてランダムなキャラクターを選択する関数
function getRandomCharacterByRarity(rarity) {
  const filteredCharacters = characters.filter(
    (character) => character.rarity === rarity
  );
  const randomIndex = Math.floor(Math.random() * filteredCharacters.length);
  return filteredCharacters[randomIndex];
}

  // 結果の表示処理
function showResult(character) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `
    <h3>${character.name}</h3>
    <img src="${character.image}" alt="${character.name}" data-url="${character.url}">
  `;
  // クラスリストをリセット
  resultContainer.className = "result-container";

  // SRとSSRの場合に特別なスタイルを適用
  if (character.rarity === "SR") {
    resultContainer.classList.add("sr-result");
  } else if (character.rarity === "SSR") {
    resultContainer.classList.add("ssr-result");
  }

  const resultImage = document.querySelector("#result-container img");
  resultImage.addEventListener("click", () => {
    const url = resultImage.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
}

// キャラクターのコレクションに追加する関数
function collectCharacter(character) {
  collectedCharacters.push(character);
}

// コレクションされたキャラクターを表示する関数
function showCollection() {
  const collectionContainer = document.getElementById("collection-container");
  collectionContainer.innerHTML = "";

  collectedCharacters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.classList.add("character-item");
    characterElement.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <p>${character.name}</p>
    `;

    collectionContainer.appendChild(characterElement);
  });
}
