import React from "react";
import { FaLaptop, FaNetworkWired, FaPrint, FaTools } from "react-icons/fa";

const VenteMateriels = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Vente de Matériel Informatique & Électronique</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Large gamme d’équipements de qualité pour particuliers, entreprises et institutions — avec service sur mesure.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<FaLaptop size={36} />}
          title="Ordinateurs & périphériques"
          description="Laptops, unités centrales, écrans, claviers, souris, webcams, batteries, onduleurs."
        />
        <FeatureCard
          icon={<FaPrint size={36} />}
          title="Impression & bureautique"
          description="Imprimantes, scanners, photocopieurs, consommables et accessoires associés."
        />
        <FeatureCard
          icon={<FaNetworkWired size={36} />}
          title="Équipements réseaux"
          description="Routeurs, modems, switchs, câblage, antennes, points d’accès professionnels."
        />
        <FeatureCard
          icon={<FaTools size={36} />}
          title="Services associés"
          description="Conseil, installation, configuration, maintenance et service après-vente rapide."
        />
      </section>

      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          Notre catalogue s'appuie sur des marques réputées : HP, Dell, Lenovo, Asus, Epson, TP-Link, Logitech, etc.
          Nous garantissons performance, durabilité et un excellent rapport qualité-prix.
        </p>
        <p>
          Que vous équipiez un bureau, une école, une clinique ou un espace public, nous vous proposons des solutions sur mesure adaptées à votre budget et vos contraintes techniques.
        </p>
        <p>
          Faites confiance à <strong>BIWI Technologies</strong> pour l’approvisionnement de vos équipements IT & électroniques avec professionnalisme et réactivité.
        </p>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default VenteMateriels;