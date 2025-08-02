// Dynamically populate achievements
const achievements = [
  "Top 2 FNCS Europe 2024",
  "Voitti Duo Fortnite Cupin 2023",
  "Yli 100000 voittoa Battle Royalessa",
  "5000+ tuntia striimausta Twitchissä",
  "Tunnettu nopeasta editoinnista ja clutch-peleistä",
];

const list = document.getElementById("achievements");

achievements.forEach(achievement => {
  const li = document.createElement("li");
  li.textContent = achievement;
  list.appendChild(li);
});



document.getElementById('showImageBtn').addEventListener('click', () => {
  const container = document.getElementById('popupContent');
  const btn = document.getElementById('showImageBtn');
  if (container.style.display === 'none') {
    container.style.display = 'block';
    btn.textContent = 'Piilota kuva';
  } else {
    container.style.display = 'none';
    btn.textContent = 'Näytä kuva';
  }
});
