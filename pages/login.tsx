import { Button } from "@mui/base";
import { OutlinedInput, Typography } from "@mui/material";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import styles from "../styles/login.module.scss";
import { useAuth } from '../hooks/useAuth';

interface LoginFormState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const {login} = useAuth();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await login(formState.username, formState.password);
    } catch (error) {
      setErrorMessage('Invalid username or password');
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginSection}>
        <div className={styles.loginTypo}>
          <Typography sx={{ fontWeight: "bold" }}>
            Please login using your credentials
          </Typography>
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginEmail}>
            <Typography>Enter your email</Typography>
            <OutlinedInput
              name="username"
              value={formState.username}
              onChange={handleInputChange}
              type="text"
              sx={{backgroundColor:'white'}}
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
              sx={{backgroundColor:'white'}}
            />
          </div>

          {errorMessage && <Typography color="error">{errorMessage}</Typography>}

          <Button onClick={handleSubmit} className="primary-button">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
