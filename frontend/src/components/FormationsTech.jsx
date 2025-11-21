import React from "react";
import { FaBrain, FaLaptopCode, FaShieldAlt, FaCloud, FaDatabase } from "react-icons/fa";

const FormationsTech = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Formations Informatique & IA</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Formations professionnelles en informatique, intelligence artificielle, cybersécurité, cloud, 
          et développement de plateformes numériques. Adaptées débutants, professionnels et entreprises.
        </p>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

        <FeatureCard
          icon={<FaBrain size={36} />}
          title="Intelligence Artificielle & Machine Learning"
          description="Apprenez l'IA, le deep learning, la vision par ordinateur et le traitement du langage (NLP)."
        />

        <FeatureCard
          icon={<FaLaptopCode size={36} />}
          title="Développement Web & Mobile"
          description="Formations en HTML, CSS, JavaScript, React, Node.js, Flutter et React Native."
        />

        <FeatureCard
          icon={<FaShieldAlt size={36} />}
          title="Cybersécurité & Sécurité des Systèmes"
          description="Protection des réseaux, tests d’intrusion (Pentest), bonnes pratiques et normes de sécurité."
        />

        <FeatureCard
          icon={<FaCloud size={36} />}
          title="Cloud & DevOps"
          description="AWS, Azure, CI/CD, conteneurs Docker, Kubernetes, automatisation et infrastructures modernes."
        />

        <FeatureCard
          icon={<FaDatabase size={36} />}
          title="Bases de Données & Data Science"
          description="SQL, NoSQL, Big Data, Python, analyse de données, tableaux de bord (Power BI, Tableau)."
        />

        <FeatureCard
          icon={<FaLaptopCode size={36} />}
          title="Conception de Plateformes Numériques"
          description="Architecture logicielle, API, UX/UI, prototypage et développement de solutions complètes."
        />

      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto space-y-6 text-justify">
        <p>
          Les formations d’<strong>ANT TECHNOLOGY</strong> sont conçues pour offrir une montée en compétence rapide 
          et efficace. Elles allient théorie, pratique et exercices réels afin de garantir une maîtrise concrète.
        </p>

        <p>
          Nos programmes sont adaptés aux étudiants, professionnels, entrepreneurs et institutions désirant 
          renforcer leurs compétences dans le numérique, l’IA et la sécurité informatique.
        </p>

        <p>
          Toutes nos formations peuvent être dispensées en présentiel, en ligne ou en format hybride pour s’adapter 
          aux besoins de votre organisation.
        </p>

        <p>
          Besoin d’une formation personnalisée ? Contactez-nous pour établir un programme sur mesure.
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

export default FormationsTech;
