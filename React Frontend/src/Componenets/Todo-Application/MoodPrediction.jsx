import { useState } from "react";
import { predictMood } from "./API/MoodApi";
import FooterComponenet from "./FooterComponent";
import HeaderComponenet from "./HeaderComponent";

const MoodPredict = () => {
    const [inputText, setInputText] = useState("");
    const [mood, setMood] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleMoodPrediction = async () => {
        try {
            const data = await predictMood(inputText);
            setMood(data.predicted_mood);
            setMessage(data.message);
            setError("");
        } catch (err) {
            setError(err.message);
            setMood("");
            setMessage("");
        }
    };

    return (
        <>
        <HeaderComponenet />
        <div className="container mt-5 d-flex justify-content-center">
            
            <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">
                        🧠 <span className="text-primary">Mood Prediction</span>
                    </h3>

                    <div className="form-group mb-3">
                        <label htmlFor="moodInput" className="form-label fw-semibold">
                            How are you feeling today?
                        </label>
                        <textarea
                            id="moodInput"
                            className="form-control"
                            placeholder="Type your thoughts here..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            rows={4}
                        />
                    </div>

                    <div className="d-grid">
                        <button onClick={handleMoodPrediction} className="btn btn-success">
                            💡 Predict Mood
                        </button>
                    </div>

                    {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div>
                    )}

                    {mood && (
                        <div className="alert alert-info mt-4" role="alert">
                            <h5 className="mb-2">
                                😌 <strong>Mood:</strong> <span className="text-capitalize">{mood}</span>
                            </h5>
                            <p className="mb-0">
                                <strong>Message:</strong> {message}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
        <FooterComponenet />
        </>
    );
};

export default MoodPredict;
