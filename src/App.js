import {Route,Routes} from 'react-router-dom';
import Header from "./Header/Header";
import Cards from './Cards/Cards';
import Mens from "./Cards/Mens";
import Womens from './Cards/Womens';
import Cardsdetails from './Cardsdetails/Cardsdetails'
import { useState } from 'react';
// import { ThemeProvider } from '@emotion/react';
// import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




function App() {
  const [darkmode , setdarkmode]  =  useState(false)
  const[search,setsearch] = useState("")
  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
    },
  });

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
    <div className="App">

   <Header theme={darkTheme} search= {search} setsearch = {setsearch} check={(darkmode)}  change={()=>setdarkmode(!darkmode)}  />
   <Routes>
    <Route path="/" element={<Cards  search={search}  theme={darkTheme}  /> }/>
    <Route path="/mens" element={<Mens/>}/>
    <Route path="/womens" element={<Womens/>}/>
    <Route path="/cart/:id" element={<Cardsdetails/>}/>


   </Routes>
     
    </div>
   </ThemeProvider>
  );
}

export default App;
