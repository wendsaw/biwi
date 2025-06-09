import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenue chez BIWI Technologies</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Nous créons des solutions numériques innovantes pour les entreprises et les particuliers en Afrique.
        </p>
      </header>

      {/* Services */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/plateformes-informatiques" className="block"><ServiceCard
          icon={<FaLaptopCode size={40} />}
          title="Plateformes informatiques"
          description="Conception de plateformes web pour les PME, start-ups, et institutions."
        /></Link>
        <ServiceCard
          icon={<FaServer size={40} />}
          title="Développement Web"
          description="Logiciels sur mesure adaptés à vos besoins métier et à vos objectifs."
        />
        <ServiceCard
          icon={<FaMobileAlt size={40} />}
          title="Applications Mobiles"
          description="Applications Android & iOS pour e-commerce, VTC et services à la demande."
        />
        <ServiceCard
          icon={<FaShoppingCart size={40} />}
          title="Vente de Matériel"
          description="Ordinateurs, périphériques, équipements réseaux et électroniques."
        />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 BIWI Technologies — Tous droits réservés
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Home;
