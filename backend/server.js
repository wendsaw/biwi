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
  const { nom, email, telephone, service, message } = req.body;

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
  subject: '📩 Nouvelle demande de contact',
      html: `
        <h3>Demande de devis reçue via le site</h3>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Service :</strong> ${service}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('❌ Erreur SMTP:', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
