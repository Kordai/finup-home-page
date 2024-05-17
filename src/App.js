
import './App.css';
import { Route, Routes } from 'react-router-dom';
//import { Backdrop, CircularProgress } from '@mui/material';
import HomePageContainer from './Site/HomePage/HomePageContainer';
import AppBarContainer from './Site/AppBar/AppBarContainer';

function App() {
  
 // const backdrop = useSelector(state => state.auth.backdrop)   
  const user_ = JSON.parse(localStorage.getItem("finupkzuser"))
  console.log(user_);


  return (<>

    <AppBarContainer />

    <main>
      <Routes>        
        <Route path="/" element={<HomePageContainer />} />
               
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
