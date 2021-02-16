export const logInUser = (user: any) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};
export const logOutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export const loadUsers = (users: any) => {
  return {
    type: "LOAD_USERS",
    payload: users,
  };
};
