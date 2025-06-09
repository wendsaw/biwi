import React from "react";

const DeveloppementWeb = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Développement Web</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Nos solutions web sur mesure aident les entreprises à automatiser leurs processus,
          améliorer leur visibilité en ligne et offrir des services innovants à leurs clients.
        </p>
      </header>

      <section className="max-w-4xl mx-auto space-y-6 text-justify">
        <p>
          Chez <strong>BIWI Technologies</strong>, nous maîtrisons les dernières technologies de développement web :
          React, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, etc.
        </p>

        <p>
          Que vous ayez besoin d’un site vitrine, d’un système de gestion (ERP, CRM), d’une plateforme e-learning ou d’un
          tableau de bord personnalisé, notre équipe est prête à concevoir et développer votre application avec
          performance, sécurité et évolutivité.
        </p>

        <p>
          Nous appliquons les meilleures pratiques de développement, telles que l’architecture modulaire, les API REST,
          l’authentification sécurisée (JWT, OAuth2), le responsive design, et les tests automatisés.
        </p>

        <p>
          Faites confiance à BIWI pour transformer vos idées en solutions web professionnelles.
        </p>
      </section>
    </div>
  );
};

export default DeveloppementWeb;
