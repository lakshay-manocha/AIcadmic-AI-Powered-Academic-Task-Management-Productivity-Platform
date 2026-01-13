import axios from 'axios';

export const fetchRecommendations = async (taskName) => {
  try {
    const response = await axios.post('http://localhost:5000/recommend', {
      task_name: taskName,
    });
    return { data: response.data.recommended_tasks, error: null };
  } catch (err) {
    return { data: [], error: err.response?.data?.error || 'Something went wrong' };
  }
};
