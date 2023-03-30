export const validateLogin = (email: string, password: string) => {
  if (!email || !password) return { status: 400, message: 'All fields must be filled' };
};

const validate = { validateLogin };

export default validate;
