import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaShoppingCart, FaBolt, FaUserShield, FaPeopleArrows, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 text-blue-800">
      
      {/* HERO */}
      <section className="relative text-white py-20 px-6 text-center overflow-hidden">

        {/* Arrière-plan animé */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/animaux.gif')"
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ANT TECHNOLOGIE</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Créateurs de solutions numériques puissantes pour les entreprises.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* Nos Services */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          <Link to="/plateformes-Numerique">
            <ServiceCard
              icon={<FaLaptopCode size={40} />}
              title="Plateformes Numerique"
              description="Conception de plateformes numerique robustes pour les institutions."
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
              description="Matériel informatique et électronique de qualité pour vos besoins professionnels et personnels."
            />
          </Link>

          {/* SERVICE AJOUTÉ */}
          <Link to="/formations">
            <ServiceCard
              icon={<FaBrain size={40} />}
              title="Formations & IA"
              description="Formations informatique & IA, conception de plateformes numériques."
            />
          </Link>

        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-white px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir ANT TECHNOLOGIE ?</h2>
        
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

    </div>
  );
};

/* Composants réutilisables */

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 h-full flex flex-col items-center text-center">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="flex-grow">{description}</p>
  </div>
);

const WhyCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col items-center text-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm flex-grow">{description}</p>
  </div>
);

export default Home;
