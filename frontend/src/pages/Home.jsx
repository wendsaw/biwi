import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaShoppingCart, FaBolt, FaUserShield, FaPeopleArrows } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue chez BIWI Technologies</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Créateurs de solutions numériques puissantes pour les entreprises.
        </p>
        <Link to="/contact" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">
          Contactez-nous
        </Link>
      </section>

      {/* Nos Services */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/plateformes-informatiques" className="block">
            <ServiceCard
              icon={<FaLaptopCode size={40} />}
              title="Plateformes Informatiques"
              description="Conception de plateformes web robustes pour les institutions et les entreprises."
            />
          </Link>
          <Link to="/developpement-web">
            <ServiceCard
              icon={<FaServer size={40} />}
              title="Développement Web"
              description="Applications web sur mesure pour automatiser vos opérations."
            />
          </Link>
          <Link to="/applications-mobiles">
            <ServiceCard
              icon={<FaMobileAlt size={40} />}
              title="Applications Mobiles"
              description="Développement d'apps Android & iOS performantes et intuitives."
            />
          </Link>
          <Link to="/vente-materiels">
            <ServiceCard
              icon={<FaShoppingCart size={40} />}
              title="Vente de Matériel"
              description="Matériel informatique et électronique de qualité pour vos besoins professionnels."
            />
          </Link>
        </div>
      </section>

      {/* Pourquoi choisir BIWI */}
      <section className="bg-white px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir BIWI ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <WhyCard
            icon={<FaBolt size={36} />}
            title="Rapidité & Réactivité"
            description="Nous livrons des solutions fiables dans les délais les plus courts."
          />
          <WhyCard
            icon={<FaUserShield size={36} />}
            title="Sécurité & Fiabilité"
            description="Des systèmes protégés contre les menaces et conformes aux standards."
          />
          <WhyCard
            icon={<FaPeopleArrows size={36} />}
            title="Approche Humaine"
            description="Nous travaillons main dans la main avec nos clients à chaque étape."
          />
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="text-center text-sm text-gray-500 mt-16 py-4 border-t">
        © 2025 BIWI Technologies — Tous droits réservés
      </footer> */}
    </div>
  );
};

// Composants réutilisables
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const WhyCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm">{description}</p>
  </div>
);

export default Home;
