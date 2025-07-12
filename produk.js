document.querySelector('.input-submit').addEventListener('click', function () {
    const input = document.querySelector('.input-search').value.toLowerCase();

    const produkMap = {
      "free fire": "free-fire",
      "ff": "free-fire",
      "mobile legends": "mobile-legends",
      "ml": "mobile-legends",
      "pubg": "pubg-mobile",
      "pubg mobile": "pubg-mobile",
      "genshin impact": "genshin-impact",
      "genshin": "genshin-impact",
      "magic chess": "magic-chess",
      "mcgg": "magic-chess",
      "token listrik": "token-listrik",
      "pulsa axis": "pulsa-axis",
      "pulsa indosat": "pulsa-indosat",
      "pulsa telkomsel": "pulsa-telkomsel",
      "pulsa telkom": "pulsa-telkomsel",
      "pulsa xl": "pulsa-xl",
      "pulsa axis": "pulsa-axis",
      "im3": "pulsa-indosat",
      "indosat": "pulsa-indosat",
      "telkomsel": "pulsa-telkomsel",
      "telkom": "pulsa-telkomsel",
      "xl": "pulsa-xl",
      "spotify": "spotify",
      "vidio": "vidio",
      "wetv": "wetv"
    };

    const targetId = produkMap[input];

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      alert("Produk tidak ditemukan");
    }
  });