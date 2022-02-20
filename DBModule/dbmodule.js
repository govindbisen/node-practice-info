exports.authenticateUser = (username, password) => {
  if (username === "admin" && password === "admin") {
    return " Valid User";
  }
  return "Invalid user";
};
