export const predictMood = async (text) => {
  try {
    const response = await fetch("http://localhost:5000/predict_mood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to predict mood");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
