const getScrollPercent = () => {
  // スクロール量
  const scrolled = window.scrollY;

  // console.log(`${scrolled}, スクロールされました。`);
  
  // ページ全体の高さ
  const pageHeight = document.documentElement.scrollHeight;

  // 表示領域の高さ
  const viewHeight = document.documentElement.clientHeight;

  // スクロールされた割合
  const percentage = scrolled / (pageHeight - viewHeight) * 100;

  // プログレスバーに幅を指定
  document.querySelector("#bar").style.width = `${percentage}%`;

  // console.log(`ページの高さ：${pageHeight}, 表示領域の高さ：${viewHeight}`);
}

window.addEventListener("scroll", getScrollPercent);