// src/components/Header.tsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="sticky" className="header-appbar">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-title">
          ZUBILO
        </Typography>
        <Box className="header-buttons">
          <Button variant="contained" className="header-login-button">
            Вход
          </Button>
          <Button variant="contained" className="header-register-button">
            Регистрация
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
