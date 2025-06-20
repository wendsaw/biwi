import React from "react";
import { FaMobileAlt, FaMapMarkedAlt, FaBell, FaShoppingCart } from "react-icons/fa";

const ApplicationsMobiles = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Applications Mobiles</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Développement d'applications mobiles Android & iOS modernes et performantes, conçues pour vos besoins métiers.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<FaMobileAlt size={36} />}
          title="Développement natif & hybride"
          description="Apps conçues avec React Native et Flutter pour des performances optimales sur toutes les plateformes."
        />
        <FeatureCard
          icon={<FaBell size={36} />}
          title="Fonctionnalités avancées"
          description="Notifications push, paiements intégrés, authentification, chat, API tierces, etc."
        />
        <FeatureCard
          icon={<FaMapMarkedAlt size={36} />}
          title="Géolocalisation & tracking"
          description="Suivi de véhicules, localisation d'utilisateurs, cartes interactives, idéal pour VTC, logistique, livraison."
        />
        <FeatureCard
          icon={<FaShoppingCart size={36} />}
          title="Solutions e-commerce"
          description="Développement de boutiques mobiles avec panier, gestion des commandes, paiement sécurisé."
        />
      </section>

      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          <strong>BIWI tech</strong> accompagne ses clients de l'idée à la publication sur les stores : étude fonctionnelle, design UI/UX, développement, tests, déploiement et support.
        </p>
        <p>
          Nos applications sont pensées pour l'évolutivité, la sécurité et l'engagement utilisateur. Elles sont adaptées aux PME, startups, ONG et institutions.
        </p>
        <p>
          Vous avez une idée d'application mobile ? Contactez-nous pour une démonstration ou un devis personnalisé.
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

export default ApplicationsMobiles;