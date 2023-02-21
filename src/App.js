import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { HomePage } from './pages/homePage/index'
import { ProfilePage } from './pages/profilePage/index'
import { LoginPage } from './pages/loginPage/index'


function App() {
  /**
   * site color mode (dark or light)
   */
  const mode = useSelector((state) => state.auth.mode);

  /**
   * Set the color theme based on the theme settings provided
   */
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isAuth = useSelector((state) => state.auth.token)

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to='/' />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
