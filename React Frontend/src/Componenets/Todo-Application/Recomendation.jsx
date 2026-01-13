import { useState } from 'react';
import { FaSearch, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { fetchRecommendations } from './API/RecomendationApiService';
import FooterComponenet from './FooterComponent';
import HeaderComponenet from './HeaderComponent';

const Recommendation = () => {
  const [taskName, setTaskName] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const handleGetRecommendations = async () => {
    const { data, error } = await fetchRecommendations(taskName);
    setRecommendations(data);
    setError(error);
  };

  return (
     <div className="container mt-5">
      <HeaderComponenet />
      <div className="card shadow-lg p-4 rounded-4 border-0">
        <h3 className="mb-4 text-success d-flex align-items-center">
          <FaSearch className="me-2" /> Task Recommender
        </h3>

        <input
          type="text"
          className="form-control mb-3 rounded-3 border-success"
          placeholder="🔍 Enter your task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <div className="d-grid gap-2">
          <button className="btn btn-success rounded-pill" onClick={handleGetRecommendations}>
            Get Smart AI Recommendations 🚀
          </button>
        </div>

        {error && (
          <div className="alert alert-danger mt-3 d-flex align-items-center" role="alert">
            <FaExclamationCircle className="me-2" /> {error}
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="mt-4">
            <h5 className="text-primary mb-3">✨ Recommended Tasks</h5>
            <ul className="list-group list-group-flush">
              {recommendations.map((task, index) => (
                <li key={index} className="list-group-item d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <FooterComponenet />
    </div>
  );
};

export default Recommendation;

