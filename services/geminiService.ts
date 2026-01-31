
import { GoogleGenAI, Type } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
// Assume this variable is pre-configured, valid, and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getIntelligenceInsight = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `As a MIGSAK Systems Architect, provide a concise, high-level technical insight regarding this networking/software query: ${query}. Focus on 'Intelligence with Intent'. Max 50 words.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });
    // The GenerateContentResponse object features a text property (not a method) that directly returns the string output.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The intelligence layer is temporarily offline for maintenance.";
  }
};
