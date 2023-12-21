// api.js
import { useMutation } from 'react-query';

const API_URL = 'http://localhost:8081/movie/createMovies';

export const submitFormData = async (formData) => {
  formData.userId=localStorage.getItem("e")
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  console.log(response)

  if (!response.ok) {
    throw new Error('Submission failed');
  }

  return response.json();
};

export const useSubmitFormData = () => {
  return useMutation((formData) => submitFormData(formData));
};
