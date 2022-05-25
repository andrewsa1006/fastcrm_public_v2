const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyItems: "center",
        alignContent: "center",
        height: "700px",
      }}
    >
      <label>Username:</label>
      <input name="username"></input>
      <label>Password:</label>
      <input name="password"></input>
    </div>
  );
};

export default Login;
