const users: any = [];

export const usersReducer = (state = null, action: any) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("user_info", JSON.stringify(action.payload));
      return action.payload;
    case "LOGOUT_USER":
      localStorage.setItem("user_info", "");
      state = null;
      return state;
    case "LOAD_USERS":

      const newUsers = [...users, action.payload];
      return newUsers;
    default:
      return state;
  }
};
