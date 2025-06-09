import React from "react";

const VenteMateriels = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Vente de Matériel Informatique & Électronique</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          BIWI fournit une large gamme d’équipements informatiques, électroniques et accessoires adaptés aux
          besoins des particuliers, entreprises et institutions.
        </p>
      </header>

      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          Notre catalogue comprend des ordinateurs portables et de bureau, serveurs, imprimantes, scanners, équipements
          réseaux (switchs, routeurs, modems), composants internes (SSD, RAM, cartes graphiques) ainsi que des périphériques
          (claviers, souris, écrans, onduleurs, etc.).
        </p>

        <p>
          Nous sélectionnons des produits de marques reconnues (HP, Dell, Lenovo, Asus, TP-Link, Logitech...) et assurons un excellent
          rapport qualité-prix avec un service après-vente professionnel.
        </p>

        <p>
          Que vous cherchiez à équiper un bureau, une salle informatique ou un établissement scolaire, nous vous
          accompagnons avec des conseils adaptés, des devis détaillés et des livraisons rapides.
        </p>

        <p>
          Faites confiance à BIWI pour la fourniture fiable et rapide de vos matériels technologiques.
        </p>
      </section>
    </div>
  );
};

export default VenteMateriels;
