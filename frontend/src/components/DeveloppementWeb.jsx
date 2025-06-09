import React from "react";
import { FaReact, FaNodeJs, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

const DeveloppementWeb = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Développement Web</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Des solutions web puissantes, modernes et évolutives pour propulser votre transformation digitale.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<FaReact size={36} />}
          title="Technologies modernes"
          description="Nous utilisons les frameworks les plus avancés comme React, Node.js, Express et MongoDB."
        />
        <FeatureCard
          icon={<FaShieldAlt size={36} />}
          title="Sécurité avancée"
          description="Implémentation de protocoles d'authentification sécurisée (JWT, OAuth2), protection des données sensibles."
        />
        <FeatureCard
          icon={<FaLaptopCode size={36} />}
          title="Interface responsive & UX"
          description="Nos interfaces sont pensées mobile-first, avec un design ergonomique et accessible."
        />
        <FeatureCard
          icon={<FaNodeJs size={36} />}
          title="Architecture modulaire & API"
          description="Développement d'architectures évolutives avec intégration d'API REST ou GraphQL."
        />
      </section>

      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          <strong>BIWI Technologies</strong> conçoit des applications web sur mesure adaptées à chaque secteur : éducation, finance, logistique, santé, e-commerce, administration.
        </p>
        <p>
          Nos prestations couvrent toutes les étapes : définition des besoins, prototypage UI/UX, développement, déploiement cloud, documentation et maintenance.
        </p>
        <p>
          Nos livrables sont toujours pensés pour offrir performance, sécurité, évolutivité et facilité d'utilisation.
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

export default DeveloppementWeb;
