// Validação de e-mail
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validação de senha (mínimo de 8 caracteres, incluindo número e caractere especial)
export const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

// Validação de nome (não vazio e sem números)
export const isValidName = (name) => {
  const regex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  return regex.test(name.trim());
};

// Validação de número de telefone (somente dígitos, com 10 a 15 caracteres)
export const isValidPhoneNumber = (phoneNumber) => {
  const regex = /^\d{10,15}$/;
  return regex.test(phoneNumber);
};

// Verificar se o campo está vazio
export const isEmpty = (value) => {
  return value.trim() === '';
};
