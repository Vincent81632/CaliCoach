import express from "express";
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // <-- nie direkt einfügen!
});

app.post("/generate-plan", async (req, res) => {
  try {
    const { userProfile } = req.body;

    const response = await openai.responses.create({
      model: "gpt-5",
      input: `${userProfile}`,
    });

    res.json({ output: response.output[0].content[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fehler bei der KI-Anfrage" });
  }
});

const PORT = process.env.PORT 
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));

