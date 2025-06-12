import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message envoyé avec succès !");
        setForm({ nom: "", email: "", telephone: "", service: "", message: "" });
      } else {
        setStatus("❌ Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("❌ Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Contactez-nous</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Vous avez un projet ou une question ? Envoyez-nous un message, nous vous répondrons rapidement.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Téléphone</label>
          <input
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Service</label>
          <input
            type="text"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Envoyer
        </button>

        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
