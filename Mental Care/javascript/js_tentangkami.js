document.addEventListener("DOMContentLoaded", () => {
  const anggotaTim = document.querySelectorAll(".anggota");

  anggotaTim.forEach((anggota) => {
    anggota.addEventListener("click", () => {
      alert(`Kamu mengklik profil: ${anggota.innerText.split('\n')[0]}`);
    });
  });
});
