import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "22668167516"; 
  const PHONE_1 = "60191998";
  const PHONE_2 = "68167516";
  const EMAIL_CONTACT = "info@anttechnologie.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Bonjour, je m'appelle ${form.nom}.
Téléphone : ${form.telephone}.

${form.message}

📞 Contacts téléphone :
 ${PHONE_1}
 ${PHONE_2}

📩 Email : ${EMAIL_CONTACT}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          <span className="text-green-600">Contact</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Remplissez ce formulaire et vous serez redirigé automatiquement vers WhatsApp.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-xl shadow space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Votre message / projet</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="text-sm text-gray-700">
          📞 <strong>Contacts téléphoniques :</strong><br/>
           {PHONE_1}<br/>
           {PHONE_2}
        </div>

        <div className="text-sm text-gray-700">
          📱 <strong>WhatsApp :</strong> {PHONE_2}
        </div>

        <div className="text-sm text-gray-700">
          📩 <strong>Email :</strong> {EMAIL_CONTACT}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Envoyer sur WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contact;
