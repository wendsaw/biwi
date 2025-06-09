import React from "react";

const ApplicationsMobiles = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Applications Mobiles</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Nous développons des applications mobiles performantes pour Android et iOS,
          adaptées à vos besoins métiers spécifiques : e-commerce, VTC, logistique, santé, éducation, etc.
        </p>
      </header>

      <section className="max-w-4xl mx-auto space-y-6 text-justify">
        <p>
          Chez <strong>BIWI Technologies</strong>, nous utilisons des frameworks modernes comme <strong>React Native</strong> et <strong>Flutter</strong>
          pour concevoir des applications mobiles multiplateformes à la fois rapides, fiables et esthétiques.
        </p>

        <p>
          Nos applications sont dotées de fonctionnalités avancées : notifications push, géolocalisation,
          paiement mobile, authentification sécurisée, intégration API, gestion des commandes, chat en temps réel, etc.
        </p>

        <p>
          De la conception UI/UX jusqu'à la mise en production sur Google Play et l'App Store, notre équipe vous accompagne à chaque étape.
        </p>

        <p>
          Que vous soyez une startup, une PME ou une grande entreprise, nous vous aidons à transformer vos idées en expériences mobiles engageantes.
        </p>
      </section>
    </div>
  );
};

export default ApplicationsMobiles;
