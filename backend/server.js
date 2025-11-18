import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Route API pour formulaire de contact
app.post('/api/contact', async (req, res) => {
  const {
    nom,
    email,
    telephone,
    ville,
    niveau,
    experience,
    experienceDetails,
    motivation,
    format,
    ordinateur,
    engagement,
    dateDebut
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,             // mail.privateemail.com
      port: Number(process.env.SMTP_PORT),     // 465
      secure: process.env.SMTP_SECURE === 'true', // true pour SSL
      auth: {
        user: process.env.EMAIL_USER,          // wend@biwi.pro
        pass: process.env.EMAIL_PASS           // mot de passe ou token
      }
    });

    await transporter.sendMail({
      from: `"BIWI" <wend@biwi.pro>`, // ✅ make sure this is BIWI, not ESER-PROF
  to: process.env.EMAIL_USER,
  cc: email,
  subject: '📩 Nouvelle demande de contact',
      html: `
        <h3>Nouvelle demande d'inscription à la formation Fullstack</h3>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Ville :</strong> ${ville}</p>
        <p><strong>Niveau d'études :</strong> ${niveau}</p>
        <p><strong>Expérience en informatique :</strong> ${experience}</p>
        ${experience === 'Oui' ? `<p><strong>Détails :</strong> ${experienceDetails}</p>` : ''}
        <p><strong>Motivation :</strong><br>${motivation}</p>
        <p><strong>Souhait de formation :</strong> ${format?.join(', ')}</p>
        <p><strong>Accès ordinateur/internet :</strong> ${ordinateur}</p>
        <p><strong>Engagement :</strong> ${engagement}</p>
        <p><strong>Date souhaitée :</strong> ${dateDebut}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('❌ Erreur SMTP:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email.' });
  }
});
// ✅ Route API pour formulaire d'inscription
app.post('/api/inscription', async (req, res) => {
  const {
    nom,
    email,
    telephone,
    ville,
    niveau,
    experience,
    experienceDetails,
    motivation,
    format,
    ordinateur,
    engagement,
    dateDebut
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"BIWI" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      cc: email,
      subject: '📥 Nouvelle inscription reçue',
      html: `
        <h3>Nouvelle demande d'inscription à la formation Fullstack</h3>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Ville :</strong> ${ville}</p>
        <p><strong>Niveau d'études :</strong> ${niveau}</p>
        <p><strong>Expérience en informatique :</strong> ${experience}</p>
        ${experience === 'Oui' ? `<p><strong>Détails :</strong> ${experienceDetails}</p>` : ''}
        <p><strong>Motivation :</strong><br>${motivation}</p>
        <p><strong>Souhait de formation :</strong> ${format?.join(', ')}</p>
        <p><strong>Accès ordinateur/internet :</strong> ${ordinateur}</p>
        <p><strong>Engagement :</strong> ${engagement}</p>
        <p><strong>Date souhaitée :</strong> ${dateDebut}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Inscription envoyée avec succès.' });
  } catch (error) {
    console.error('❌ Erreur SMTP - inscription:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'inscription.' });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
