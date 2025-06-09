import React from "react";
import { FaCloud, FaGlobe, FaLock, FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionsCloud = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Solutions Cloud Centralisées</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Gérez vos applications, données et services de façon centralisée, sécurisée et accessible partout.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Feature
          icon={<FaCloud size={36} />}
          title="Accès 24h/24 – 7j/7"
          description="Vos plateformes et données accessibles à tout moment, de n’importe où, via Internet."
        />
        <Feature
          icon={<FaGlobe size={36} />}
          title="Déploiement mondial"
          description="Hébergement sur des serveurs internationaux (AWS, Azure, OVH) avec optimisation géographique."
        />
        <Feature
          icon={<FaLock size={36} />}
          title="Sécurité des données"
          description="Certificats SSL, chiffrement des données, sauvegardes automatiques, authentification renforcée."
        />
        <Feature
          icon={<FaSyncAlt size={36} />}
          title="Synchronisation en temps réel"
          description="Mise à jour instantanée des données sur tous les terminaux connectés."
        />
      </section>

      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          Nos solutions cloud centralisées vous permettent de réduire les coûts d'infrastructure, améliorer la
          collaboration d'équipe, et renforcer la fiabilité de vos services numériques.
        </p>
        <p>
          BIWI Technologies s’occupe de toute la chaîne de valeur : configuration de serveurs cloud, déploiement des
          applications, sécurisation, monitoring, et support technique.
        </p>
        <p>
          Contactez-nous pour migrer vos outils vers le cloud ou concevoir une solution sur mesure, centralisée et évolutive.
        </p>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default SolutionsCloud;
