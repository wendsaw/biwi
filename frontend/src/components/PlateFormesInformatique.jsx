import React from "react";

const PlateFormesInformatique = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Plateformes Informatiques</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          BIWI conçoit et développe des plateformes web et cloud sur mesure, adaptées aux besoins des entreprises, institutions et particuliers.
        </p>
      </header>

      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          Une plateforme informatique permet d’unifier plusieurs fonctions de gestion ou de services dans un seul outil accessible via le web.
          Elle peut intégrer des modules comme la gestion des utilisateurs, la messagerie, les tableaux de bord, les fichiers, ou encore les paiements.
        </p>

        <p>
          Nous développons des plateformes pour des domaines variés : éducation (e-learning), santé (dossier médical), logistique, ressources humaines,
          agriculture intelligente, finance, etc.
        </p>

        <p>
          Nos solutions sont conçues avec des technologies modernes (React, Node.js, MongoDB, PostgreSQL, APIs REST) et respectent les standards de
          performance, sécurité et accessibilité.
        </p>

        <p>
          BIWI vous accompagne de la phase de spécification à la mise en ligne, avec un support technique fiable et un design sur mesure.
        </p>
      </section>
    </div>
  );
};

export default PlateFormesInformatique;
