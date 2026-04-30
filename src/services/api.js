const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

/**
 * Sends a message to the OpenAI API and returns the response.
 * @param {Array} messages - The conversation history.
 * @returns {Promise<string>} - The AI response.
 */
export const getChatResponse = async (messages) => {
  if (!API_KEY || API_KEY === "your_openai_api_key_here") {
    console.error("OpenAI API key is missing or not configured.");
    throw new Error("API_KEY_MISSING");
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful and professional hospital assistant. Provide medical information cautiously and always recommend consulting a doctor for serious issues. Keep responses concise and clean.",
          },
          ...messages,
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API Error:", errorData);
      throw new Error(errorData.error?.message || "Failed to fetch AI response");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Network or API Error:", error);
    throw error;
  }
};
