
import './App.css';
import { Route, Routes } from 'react-router-dom';
//import { Backdrop, CircularProgress } from '@mui/material';
import HomePageContainer from './Site/HomePage/HomePageContainer';
import AppBarContainer from './Site/AppBar/AppBarContainer';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServicePageContainer from './Site/ServicesPage/ServicePageContainer';

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

    <AppBarContainer />

    <main>
      <Routes>        
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/uslugi_buhgaltera" element={<ServicePageContainer />} />
               
      </Routes>
    </main>
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
