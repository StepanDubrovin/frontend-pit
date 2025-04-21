// src/App.tsx
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './components/theme.ts';
import Header from './components/Header.tsx'; 
import './App.css';
import ImageSlider from './components/ImageSlider.tsx';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
        <Header />
        <Box  sx={{ color: '#fff', p: 4 }}>
          {/* Здесь будет основной контент сайта */}
          <h1 className='title'>Добро пожаловать на ZUBILO</h1>
          <p className='about'>Это сайт, посвященный культовым автомобилям АвтоВАЗа</p>
        </Box>
        <div>
          <ImageSlider />
        </div>
          <Box className='info' sx={{ position: 'relative', bottom: 0, left: 0, right: 0, backgroundColor: theme.palette.background.paper, p: 2 }}>
          <p className='footer' >© 2025 ZUBILO. Все права защищены.</p>
          </Box>
        </Box>
    </ThemeProvider>
  );
}

export default App;
