import React from "react";
import { FaCloud, FaCogs, FaLock, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const PlateFormesInformatique = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Plateformes Informatiques</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Conception de plateformes sur mesure, robustes et évolutives pour transformer votre entreprise grâce au numérique.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Link to="/solutions-cloud" className="block">
  <FeatureCard
    icon={<FaCloud size={36} />}
    title="Solutions Cloud Centralisées"
    description="Accédez à votre plateforme de n'importe où, à tout moment, avec une haute disponibilité."
  />
</Link>

        <FeatureCard
          icon={<FaCogs size={36} />}
          title="Modules Personnalisés"
          description="Intégrez des fonctionnalités métier spécifiques : gestion RH, ERP, messagerie, paiements, etc."
        />
        <FeatureCard
          icon={<FaLock size={36} />}
          title="Sécurité et Performance"
          description="Hébergement sécurisé, authentification, sauvegardes automatisées, protection des données."
        />
        <FeatureCard
          icon={<FaUsers size={36} />}
          title="Expérience Utilisateur Optimisée"
          description="Interfaces ergonomiques, responsive design, tableaux de bord intuitifs."
        />
      </section>

      <section className="max-w-5xl mx-auto space-y-6 text-justify mb-12">
        <p>
          Chez <strong>BIWI Technologies</strong>, nous développons des plateformes informatiques pour divers secteurs :
          éducation, santé, agriculture, finance, administration, logistique.
        </p>
        <p>
          Nos technologies principales incluent React, Node.js, MongoDB, PostgreSQL, Tailwind CSS et API RESTful.
        </p>
        <p>
          Contactez-nous pour planifier une démonstration ou obtenir un devis.
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

export default PlateFormesInformatique;
