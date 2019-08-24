export const USERNAME_KEY = 'DRAGON_USER';

export const isAuthenticated = () => Boolean(localStorage.getItem(USERNAME_KEY));

export const getUser = () => localStorage.getItem(USERNAME_KEY);

export const login = (username) => {
  localStorage.setItem(USERNAME_KEY, username);

  window.location.reload();
};

export const logout = () => {
  localStorage.removeItem(USERNAME_KEY);

  window.location.reload();
};
