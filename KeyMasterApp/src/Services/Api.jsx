import axios from 'axios';

// Configuração base do Axios (URL da API)
const API = axios.create({
  baseURL: 'https://sua-api-endpoint.com',
  timeout: 10000, // Tempo limite (10 segundos)
});

API.interceptors.request.use(
  config => {
    // Adicionar token de autenticação, se necessário
    const token = "SEU_TOKEN_DE_AUTENTICACAO";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

API.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error.response || error.message);
    return Promise.reject(error);
  }
);

export const fetchExercises = async () => {
  try {
    const response = await API.get('/exercises');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar exercícios.');
  }
};

export const sendMessage = async (chatId, message) => {
  try {
    const response = await API.post(`/chats/${chatId}/messages`, { message });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao enviar mensagem.');
  }
};

export default API;
