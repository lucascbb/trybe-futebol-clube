export const validateLogin = (email: string, password: string) => {
  if (!email || !password) return { status: 400, message: 'All fields must be filled' };

  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
  if (!regex.test(email) || password.length < 6) {
    return { status: 401, message: 'Invalid email or password' };
  }
};
const validate = { validateLogin };

export default validate;
