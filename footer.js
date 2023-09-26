// footer.js

// Données JSON pour le footer
const footerData = {
  nomSite: "Miraculous",
  annee: 2023,
  droits: "Tous droits réservés"
};

// Fonction pour afficher les données JSON dans le footer
function afficherFooterData(data) {
  const footerContent = document.getElementById("footerContent");
  footerContent.textContent = ` © ${data.annee} ${data.nomSite}. ${data.droits}`;
}

// Appeler la fonction pour afficher les données dans le footer
afficherFooterData(footerData);
