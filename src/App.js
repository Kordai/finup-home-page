
import './App.css';
import { Route, Routes } from 'react-router-dom';
//import { Backdrop, CircularProgress } from '@mui/material';
import HomePageContainer from './Site/HomePage/HomePageContainer';
import AppBarSiteContainer from './Site/AppBar/AppBarSiteContainer';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServicePageContainer from './Site/ServicesPage/ServicePageContainer';
import { Container, Grid, Typography } from '@mui/material';
import OnlineBuhgalteriyaPageContainer from './Site/OnlineBuh/OnlineBuhgalteriya/OnlineBuhgalteriyaPageContainer';
import SettingsOnlineBuhgalterPageContainer from './Site/OnlineBuh/SettingsOnlineBuhgalter/SettingsOnlineBuhgalterContainer'
import FunctionsOnlineBuhgalterPageContainer from './Site/OnlineBuh/FunctionsOnlineBuhgalter/FunctionsOnlineBuhgalterPageContainer';

function App() {

  //const authUser = useSelector(state => state.auth.authUser)
  const userID = useSelector(state => state.auth.authUser.id)
  const dispatch = useDispatch()

  // const backdrop = useSelector(state => state.auth.backdrop)   
  //const user_1 = JSON.parse(localStorage.getItem("finupkzuserchat"))

  const setUser = useCallback((data) => {
    dispatch({ type: 'AUTH/SET_USER', user: data })
  }, [dispatch])

  useEffect(() => {
    const getStorageUser = () => {
      const user_ = JSON.parse(localStorage.getItem("finupkzuserchat"))
      if (user_ !== null) {
        setUser(user_)
      }
    }
    if (userID === 0) {
      getStorageUser()
    }
  }, [userID, setUser])

  return (<>

    <AppBarSiteContainer />

    <main>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/uslugi_buhgaltera" element={<ServicePageContainer />} />
        <Route path="/online_buhgalteriya" element={<OnlineBuhgalteriyaPageContainer />} />
        <Route path="/instrukciy_online_buhgalter" element={<SettingsOnlineBuhgalterPageContainer />} />
        <Route path="/functions_online_buhgalter" element={<FunctionsOnlineBuhgalterPageContainer />} />

      </Routes>
    </main>
    <footer>
      <Container maxWidth="xl" >
        <Grid container spacing={1} >
          <Grid item   >
            <Typography variant="h6" fontStyle={'italic'} fontSize={{ xs: '0.7em', md: '1em' }} textAlign={'center'} color={'#5d5d5d'} sx={{ mt: { xs: 0.5, md: 2 } }} >
              Copyright © 2022-2024 г. FinUp.kz Услуги бухгалтерского сопровождения и Мобильное приложение для Бухгалтерии.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
    {/* <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={backdrop}
    >
      <CircularProgress color="primary" />
    </Backdrop>     */}
  </>
  );
}

export default App;
