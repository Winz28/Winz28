function toggleProfilePopup() {
  const popup = document.getElementById("popupProfile");
  const profileImage = document.getElementById("profileImage");
  const profileName = document.getElementById("profileName");
  const loggedInOptions = document.getElementById("loggedInOptions");
  const loginPrompt = document.getElementById("loginPrompt");

  // Simulasi login cek (ganti dengan sistem login asli kalau sudah punya)
  const username = localStorage.getItem("username");

  if (username) {
    // User sudah login
    profileImage.src = "user.jpg"; // Ganti dengan foto profil user jika punya
    profileName.textContent = username;
    loggedInOptions.style.display = "block";
    loginPrompt.style.display = "none";
  } else {
    // Belum login
    profileImage.src = "donat.png";
    profileName.textContent = "#";
    loggedInOptions.style.display = "none";
    loginPrompt.style.display = "block";
  }

  // Toggle tampilkan popup
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function goToSettings() {
  window.location.href = "pengaturan.html"; // Ganti dengan halaman pengaturan
}

function logout() {
  localStorage.removeItem("username");
  alert("Berhasil logout.");
  location.reload();
}