import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getStylingAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are an elite high-fashion AI stylist for 'TIPSY-TOPSY', a premium cyberpunk streetwear brand. Your tone is technical, futuristic, and exclusive. Respond with brief, punchy advice. Focus on 'Fashion DNA', 'Digital Twins', and 'Architectural Silhouettes'. Keep responses under 100 words.",
      },
    });
    return response.text || "Connection lost to the fashion grid. Re-tuning...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Stylist mainframe offline. Check your neural connection.";
  }
}

export async function generateOutfitRecommendation(preferences: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a streetwear outfit recommendation based on these preferences: ${preferences}`,
      config: {
        systemInstruction: "Suggest a 3-piece outfit from a futuristic streetwear collection. Include a 'Core Layer', 'Outer Shell', and 'Accessory'. Describe each piece with futuristic terminology like 'biopolymer', 'holographic weave', or 'carbon-reinforced'. Respond in a concise list format.",
      },
    });
    return response.text || "Outfit recommendation failed. Chaos detected.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating recommendation.";
  }
}
