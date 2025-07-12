const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Daftar akun
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = signUpForm.querySelector('input[placeholder="Nama"]').value;
  const email = signUpForm.querySelector('input[placeholder="Email"]').value;
  const password = signUpForm.querySelector('input[placeholder="Password"]').value;

  if (nama && email && password) {
    const userData = {
      nama: nama,
      email: email,
      password: password
    };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Berhasil daftar! Silakan login.');
    container.classList.remove('right-panel-active'); // langsung pindah ke login
  } else {
    alert('Isi semua field!');
  }
});

// Login akun
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = signInForm.querySelector('input[placeholder="Email"]').value;
  const password = signInForm.querySelector('input[placeholder="Password"]').value;

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (savedUser && email === savedUser.email && password === savedUser.password) {
    alert(`Selamat datang, ${savedUser.nama}!`);
    // Contoh redirect
    window.location.href = "home.html"; // ganti sesuai halaman tujuanmu
  } else {
    alert('Email atau password salah!');
  }
});