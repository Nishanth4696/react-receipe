import './App.css';
import { useState} from 'react';

import ReceipeList from './ReceipeList';
import { Welcome } from './Welcome';
import {AddReceipe } from './AddReceipe';
import {NotFound} from './NotFound'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {  ReceipeDetails } from './ReceipeDetails';
import { EditReceipe } from './EditReceipe';

import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



<iframe width="853" height="480" src="https://www.youtube.com/embed/pjJgCXx_FRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




export default function App() {
  
  const List_of_Receipes=[
    {
      name: "Paneer Butter Masala",
      rating: 4.9,
      summary: "Paneer Butter Masala is one of Indias most popular paneer gravy recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is one that I have been making for a long time. With my video and step-by-step guide you can easily make this restaurant style paneer butter masala at home!",
      breif:"This Paneer Butter Masala recipe is a rich and creamy dish of paneer (cottage cheese) in a tomato, butter and cashew sauce (known as Makhani gravy).The dish has a lovely tang coming from the tomatoes and is slightly sweet with a creamy and velvety feel to it.With my easy, quick and delicious recipe you can prepare this restaurant style paneer butter masala recipe within minutes. Called by various names such as butter paneer or butter paneer masala or paneer makhani this dish is of the most popular Indian paneer dish. Obviously being so popular it is served in many Indian restaurants. Decades back (in some other lifetime!) I would make butter chicken and this paneer butter masala is adapted from that recipe. For the first time, I had learned how to make butter chicken during my cooking school days. Later I adapted the same recipe for making paneer butter masala. Plenty of improvisations have happened throughout the years. This Paneer Butter Masala recipe is one of the most popular paneer recipes on the blog and have been made and loved by hundreds of readers. You can read the comments at the end of the post, which has a lot of positive feedback and reviews from our readers and fans.",  
      poster: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
      trailer:"https://www.youtube.com/embed/pjJgCXx_FRk",
      ingredient01:"Ripe red juicy tomatoes:",
      ingredient02:"Cashews:",
      ingredient03:"Cream:",
      ingredient04:"Butter:",
      ingredient05:"Paneer:",
      ingredient06:"Spices & herbs:",
      ingredient1:" Tomatoes are a key ingredient here which form the base of the makhani sauce or gravy. Makhani sauce is prepared from scratch with fresh ingredients like tomatoes (specifically pureed tomatoes), cashews and butter. Onions can be added if you want. Though traditionally onions are never added in a makhani gravy. So do use tomatoes that are ripe and have a slight sweetness in them. Avoid adding tomatoes that are sour or too tart or unripe.",
      ingredient2:" Yet another important ingredient is cashews which imparts a lovely creaminess and sheen in the dish. The sweetness of the cashews also balances the tanginess of the tomatoes. Generally in butter chicken or butter paneer, cream is added. To give a creamy consistency and a sweet tinge, I add both cashew paste and cream.",
      ingredient3:" As mentioned above, apart from cashews I also add a bit of cream which thickens the gravy slightly and makes it rich. Though adding cream can be skipped for a less rich version.",
      ingredient4:" The amount of butter that is added is not huge but just right in this paneer butter masala recipe. Butter makes the curry a bit rich and buttery. Though you can go overboard by adding some more butter.",
      ingredient5:" A quality of paneer can make or break your dish. What you want are succulent soft paneer cubes gently coated with a smooth, buttery tomato sauce. So make sure to use either homemade paneer or good quality store brought paneer. Follow the instructions on the package before using paneer.",
      ingredient6:" The list of spices is not much. For that brilliant orange color, you need to add kashmiri red chilli powder. You can sub it with cayenne pepper or paprika. You will also need garam masala powder. Kasuri methi which are dried fenugreek leaves also add a good flavor. Just skip them if you do not have. For garnish cilantro (coriander leaves) are added."

    },
    
  ];

  const [receipes, setReceipes] = useState(List_of_Receipes);
  const history = useHistory();
  const [mode, setMode] = useState("light");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./receipe")}>Receipes</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./addreceipe")}>Add receipes</Button>
              
              <Button 
                startIcon ={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
                variant="text" 
                style={{marginLeft: "auto"}} 
                color="inherit" 
                onClick={() => setMode(mode ==='light'? 'dark' : 'light')}>  
              {mode==='light'? 'Dark' : 'Light'} Mode</Button>
            
            </Toolbar>
        </AppBar>
        
          <Switch>
            <Route path="/receipe">
              <Redirect to='/receipes' />
            </Route>

           

            <Route path="/receipes/edit/:id">
              <EditReceipe Receipes={receipes} setReceipes={setReceipes}/>
            </Route>

            <Route path="/receipes/:id">
              <ReceipeDetails Receipes={receipes}/>
            </Route>

          

            <Route path="/receipes">
              <ReceipeList  Receipes={receipes} setReceipes={setReceipes}/> 
            </Route>

            <Route path="/addreceipe">
                <AddReceipe Receipes={receipes} setReceipes={setReceipes}/>
            </Route>

         

            <Route path="/">
                <Welcome />
            </Route>

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}






