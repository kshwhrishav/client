import { Button } from "@mui/base";
import { OutlinedInput, Typography } from "@mui/material";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import axios from 'axios';
import styles from "../styles/login.module.scss";

interface RegisterFormState {
  username: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formState, setFormState] = useState<RegisterFormState>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3002/register', {
        username: formState.username,
        password: formState.password,
      });
      console.log('Registration successful', response.data);
      // Handle registration success, e.g., redirect to login page
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginSection}>
        <div className={styles.loginTypo}>
          <Typography sx={{ fontWeight: "bold" }}>
            Please register using your credentials
          </Typography>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginEmail}>
            <Typography>Enter your username</Typography>
            <OutlinedInput
              name="username"
              value={formState.username}
              onChange={handleInputChange}
              type="text"
              required
            />
          </div>

          <div className={styles.loginPsw}>
            <Typography>Enter your password</Typography>
            <OutlinedInput
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              type="password"
              required
            />
          </div>

          <div className={styles.loginPsw}>
            <Typography>Confirm your password</Typography>
            <OutlinedInput
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleInputChange}
              type="password"
              required
            />
          </div>

          <Button onClick={handleSubmit} className="primary-button">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
