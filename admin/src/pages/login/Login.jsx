import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import "./Login.scss";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError("");
    console.log(values);
    try {
      const response = await newRequest.post(`auth/login`, values);
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { username: values.username },
      });
      toastService.success("Đăng nhập thành công!");
      navigate("/");
    } catch (err) {
      setError("Username or password wrong!");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <TextField
            type="text"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Username"
            variant="outlined"
            margin="dense"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <TextField
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            variant="outlined"
            margin="dense"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
