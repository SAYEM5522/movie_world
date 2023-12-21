import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:8081/user';

const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("e",data.user)
  } else {
    toast.error("User not found or invalid credentials");
  }
};

const signUpUser = async (userData) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("e",data.user)
  }  else {
    toast.error("Error:", response.statusText);
  }
  return response;
};

export const useAuth = () => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation((credentials) => loginUser(credentials), {
    onSuccess: () => {
      queryClient.invalidateQueries('user'); // Invalidate user-related queries
    },
  });

  const signupMutation = useMutation((userData) => signUpUser(userData), {
    onSuccess: () => {
      queryClient.invalidateQueries('user'); // Invalidate user-related queries
    },
  });

  const login = (credentials) => loginMutation.mutate(credentials);
  const signup = (userData) => signupMutation.mutate(userData);

  return {
    login,
    signup,
    isLoading: loginMutation.isLoading || signupMutation.isLoading,
    data:loginMutation.data
  };
};
