import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaServer, FaMobileAlt, FaShoppingCart } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Nos Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          BIWI propose des solutions numériques complètes : plateformes informatiques, développement web, applications mobiles, et vente de matériel.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/plateformes-informatiques" className="block">
          <ServiceCard
            icon={<FaLaptopCode size={40} />}
            title="Plateformes Informatiques"
            description="Création de plateformes web adaptées aux besoins spécifiques des entreprises et institutions."
          />
        </Link>

        <Link to="/developpement-web" className="block">
          <ServiceCard
            icon={<FaServer size={40} />}
            title="Développement Web"
            description="Applications web performantes et sécurisées pour gérer vos activités professionnelles."
          />
        </Link>

        <Link to="/applications-mobiles" className="block">
          <ServiceCard
            icon={<FaMobileAlt size={40} />}
            title="Applications Mobiles"
            description="Développement d'applications iOS et Android modernes pour VTC, e-commerce et services."
          />
        </Link>

        <Link to="/vente-materiels" className="block">
          <ServiceCard
            icon={<FaShoppingCart size={40} />}
            title="Vente de Matériel"
            description="Ordinateurs, accessoires, équipements réseaux et électroniques livrés rapidement."
          />
        </Link>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
    <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Services;
