// Memilih 1 produk saja
const items = document.querySelectorAll(".item");
let selectedItem = "";

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedItem = item.innerText;
  });
});

function kirimWhatsapp() {
  const userId = document.getElementById("userId").value;
  const metode = document.querySelector('input[name="metode"]:checked');
  const email = document.getElementById("email").value;
  const nomorWA = "6281918101702"; // Ganti dengan nomor kamu

  if (!userId || !selectedItem || !metode) {
    alert("Harap lengkapi semua data terlebih dahulu.");
    return;
  }

  const pesan = `Halo admin, saya ingin top up Free Fire:\n\nUser ID: ${userId}\nProduk: ${selectedItem}\nMetode Pembayaran: ${metode.value}\nEmail: ${email || 'Tidak diisi'}`;

  const link = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(link, "_blank");
}