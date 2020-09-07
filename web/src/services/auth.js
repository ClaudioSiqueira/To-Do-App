export const TOKEN_KEY = "@ToDoApp-Token";
export const user_name = "@ToDoApp-user";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = data => {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(user_name, data.user.name)
  localStorage.setItem('@ToDoApp-data', data.user)
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};