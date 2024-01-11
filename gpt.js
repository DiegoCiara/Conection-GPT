const OpenAI = require("openai");
require('dotenv').config();


const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

async function sendMessage() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Descreva aqui como sua assistente irá se comportar e responder"
        },
        {
          role: "user",
          content: "Olá, se apresente!"
        },
      ],
      temperature: 0.20,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Exibindo a resposta no console
    console.log("Resposta da API:", response.choices[0].message.content);
  } catch (error) {
    console.error("Erro:", error);
  }
}

sendMessage();
