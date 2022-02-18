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



<iframe width="853" height="480" src="https://www.youtube.com/embed/jerEKMLSJJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




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

    {
      name: "Veg Pulao",
      rating: 4.5,
      summary: "Pulao or pilaf, is comfort food at its best and I make it when I want to cook something quick, easy and satisfying. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. This special recipe is my mom’s and is my go-to recipe when making veg pulao. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
      breif:"A pulao is a one pot dish of rice and vegetables or a protein cooked together with aromatics (onions, garlic, ginger etc), spices and herbs. There are many variations of making a pulao. You will find many different vegetarian pulao recipes on this blog including Peas pulao, Kashmiri pulao, Tawa pulao, Paneer pulao and more. However the recipe I share here is my favorite and how I almost always end up making it. What I like about making veg pulao is that it comes together quickly. Use a food processor for chopping the veggies and it will really come together fast.",  
      poster: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/03/veg-pulao.jpg",
      trailer:"https://www.youtube.com/embed/jerEKMLSJJI",
      ingredient01:"Spices:",
      ingredient02:"Rice:",
      ingredient03:"",
      ingredient04:"",
      ingredient05:"",
      ingredient06:"",
      ingredient1:" This recipe uses whole garam masala spices, rather than adding any pulao or biryani masala. Thus the aroma of the spices is distinctly felt in the dish.",
      ingredient2:" I usually like the texture of the rice to be a little soft in pulao, rather than being al dente, which is the way it is typically served in restaurants. So if you are like me, you will love this recipe. Read on below for tips on making the perfect rice for your pulao.",
      ingredient3:"",
      ingredient4:"",
      ingredient5:"",
      ingredient6:""

    },

    {
      name: "Manchurian",
      rating: 4,
      summary: "Veg Manchurian is a tasty Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce. There are 2 popular variations of making veg manchurian.",
      breif:  `Both the recipes taste good and are shared with step by step photos. You can make either of them as per your choice. Example: you can make veg manchurian dry as a starter snack or veg manchurian gravy for a Chinese main course.Veg manchurian gravy recipe has a sauce or gravy in which the fried veggies balls are tossed and dunked.

      The sauce has a mix of eclectic flavors and tastes like sweet, savory, spicy, sour and umami. The recipe is also vegan.
      
      Manchurian in the Indian lingo is a term for fried veggies or fried meat (fish or prawns or chicken) in this spicy-umami sauce.
      
      You can also call the sauce as manchurian sauce. Manchurian and many other Indian Chinese recipes were an invention of the Chinese community living in Kolkata.
      
      This Chinese style of cooking was largely adapted to suit the Indian palate and also to have more vegetarian options in the cuisine.`,  
      poster: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-recipe-1.jpg",
      trailer:"https://www.youtube.com/embed/DkZR9sgwm8E",
      ingredient01:"Step 1 :",
      ingredient02:"Step 2 :",
      ingredient03:"Step 3 :",
      ingredient04:"Step 4 :",
      ingredient05:"Step 5 :",
      ingredient06:"",
      ingredient1:"Beat egg in a large bowl. Mix all-purpose flour and 1 1/2 tablespoons corn flour into egg until batter is smooth; season with salt and pepper. Dip chicken into batter, working in batches, until coated; place on a plate in a single layer so the pieces do not touch.",
      ingredient2:"Heat a skillet over medium-high heat; add enough vegetable oil to reach about 1/2-inch depth. Fry battered chicken, working in batches, in the hot oil until no longer pink in the center, 5 to 10 minutes. Transfer cooked chicken, using a slotted spoon, to a paper towel-lined plate to drain",
      ingredient3:"Heat 2 tablespoons vegetable oil in skillet over medium heat; cook and stir ginger and garlic until lightly browned, 1 to 2 minutes. Add cilantro and serrano peppers; reduce heat to medium-low.",
      ingredient4:"Heat 2 tablespoons vegetable oil in skillet over medium heat; cook and stir ginger and garlic until lightly browned, 1 to 2 minutes. Add cilantro and serrano peppers; reduce heat to medium-low.",
      ingredient5:"Whisk water and 2 tablespoons corn flour together in a bowl until smooth; stir into sauce until incorporated. Bring sauce to a boil. Add chicken and stir to coat.",
      ingredient6:""

    },

    {
      name: "Aloo Rasedar",
      rating: 4.2,
      summary: "Aloo rasedar recipe with step by step photos – spiced and tasty potato gravy dish from the Uttar Pradesh cuisine. A vegan recipe.Sharing one Easy potato curry recipe which is made with tomatoes, ginger, spices and of course potatoes. The recipe is also no onion no garlic. You just need to boil or steam the potatoes. Once the potatoes are done, making the gravy is very easy.",
      breif: `The curry is adaptable and you can vary the tang and heat content as per you taste. Tomatoes make this gravy tangy. The spices merge very well with the tomatoes and make it flavorful. You can also add peas to the curry. You can also make this potato gravy for fasting. Add sendha namak (rock salt) when making for fasting.‘Rasedar‘ means having a slightly thin consistency in the curry or gravy and of course ‘aloo’ means potatoes. In north India, specially Uttar Pradesh one will find many small joints or eateries where aloo rasedar is served with pooris or kachoris. This popular combo is also served at the railway stations there.

      Aloo rasedar can be made without tomatoes too. I have already shared a similar no onion no garlic aloo recipe sans tomatoes – Mathura ke dubki wale aloo.
      `,  
      poster: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/12/aloo-rasedar-recipe.jpg",
      trailer:"https://www.youtube.com/embed/6sex3W9VRHE",
      ingredient01:"Step 1 :",
      ingredient02:"Step 2 :",
      ingredient03:"Step 3 :",
      ingredient04:"Step 4 :",
      ingredient05:"Step 5 :",
      ingredient06:"Step 6 :",      
      ingredient1:"Heat 2 tablespoons of oil over medium-high heat in a large pot.",
      ingredient2:" Fry cumin seeds for a few seconds until they turn golden brown and begin to pop. Reduce heat to medium, stir in the onion, and cook until lightly browned. Stir in serrano pepper and ginger; fry for 1 minute. ",
      ingredient3:"Season with coriander, paprika, turmeric, cayenne, and garam masala; cook for 30 seconds until fragrant.",
      ingredient4:"Stir potatoes and salt into the pot, cover, and cook for 5 to 7 minutes. Stir in lemon juice. ",
      ingredient5:" Add cauliflower, cover, and cook until cauliflower steams in its own juices until tender, about 20 minutes.",
      ingredient6:"Pour remaining 1 tablespoon of oil around the edges of the pot. Increase heat to medium-high and fry for 3 to 5 minutes to brown, stirring gently to avoid mashing the cauliflower."

    },

    {
      name: "Rajasthani Kadhi",
      rating: 4.3,
      summary: "Rajasthani Kadhi Recipe with step by step photos. Rajasthani kadhi is a spiced curd sauce that can be had plain or served with steamed basmati rice or cumin rice.It is a very easy, delicious & quick kadhi recipe. The recipe does not take much time to make as no pakoras are added to it. Another good thing is that you don’t need to chop any veggies like onions etc to make this Rajasthani kadhi.",
      breif:`I make this version of Rajasthani kadhi when I want to make something quick to go along with rice or rotis. There is another version in which pakoras or lentil fritters are added.

      In Punjabi kadhi recipe, also pakoras are added. Addition of pakoras makes the kadhi more filling and delicious but at the same time, it requires more effort and time to prepare the dish.
      
      If you want to make kadhi without pakoras then you can try this Rajasthani kadhi or Maharashrian kadhi or the Gujarati kadhi. The Gujarati kadhi has sugar or jaggery added to it & thus has a light sweet taste. Both Rajasthani and Gujarati kadhis are a no onion no garlic recipes.
      
      I usually serve the kadhi with steamed basmati rice or jeera rice. You can also serve it with rotis or peas pulao or even with veg pulao.`,  
      poster: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rajasthani-kadhi.jpg",
      trailer:"https://www.youtube.com/embed/yE744TPd7KI",
      ingredient01:"Step 1 :",
      ingredient02:"Step 2 :",
      ingredient03:"Step 3 :",
      ingredient04:"Step 4 :",
      ingredient05:"Step 5 :",
      ingredient06:"Step 6 :",     
      ingredient1:"Mix the water, yogurt, and chickpea flour together in a large saucepan until smooth;",
      ingredient2:"add the green chile peppers, ginger, sugar, turmeric, and salt.",
      ingredient3:" Bring the mixture to a boil and then immediately reduce heat to low; cook on low 5 to 10 minutes.",
      ingredient4:"Heat the oil and ghee together in a small skillet over medium heat",
      ingredient5:"fry the dried red chile peppers, curry leaves, cumin seeds, mustard seed, and asafetida powder in the the mixture until the seeds splutter.",
      ingredient6:"Stir the mixture into the saucepan with the cilantro. Serve hot."

    },

    {
      name: "Avocado Toast",
      rating: 4.8,
      summary: "Every home cook needs a good basic Avocado toast recipe for a quick, healthy, and satisfying breakfast or snack. Add a bit of flair and make vegan avocado toast with garlic bread for an extra flavorful version that’s great to load up with your favorite savory toppings. My step-by-step instructions with photos will show you how it’s done in just 15 minutes.",
      breif:`Avocados are a must-have staple in my house. In fact, I usually buy 1 or 2 each week to use in all kinds of recipes. Also known as butter fruit, avocados (makhan phal) are a wonderfully fatty and flavorful ingredient that’s great to include in both sweet and savory dishes.I even love to eat them raw, drizzled with a bit of lemon juicy, black salt and extra virgin olive oil. And I probably make a fresh and filling Guacamole Sandwich at least every-other-week.But by far my favorite way to enjoy avocados is on toast for a fast and yummy snack or breakfast. It’s a super easy recipe to prepare in as little as 15 minutes, and barely requires any actual cooking.

      When perfectly ripe avocados are smashed onto thick slices of toasted garlic bread, classic avocado toast becomes a whole other level of deliciousness. Plus, you can add nearly any other toppings you like to create your favorite flavors.
      
      Give this simple avocado toast recipe a try with your preferred bread and extra goodies, and I guarantee it’ll be your new go-to breakfast of choice.`,  
      poster: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/avocado-garlic-bread-toast.jpg",
      trailer:"https://www.youtube.com/embed/Rh4EI4luKAQ",
      ingredient01:"Step 1 :",
      ingredient02:"Step 2 :",
      ingredient03:"Step 3 :",
      ingredient04:"Step 4 :",
      ingredient05:"Step 5 :",
      ingredient06:"Step 6 :",       
      ingredient1:"Set an oven rack about 6 inches from the heat source and preheat the oven's broiler.",
      ingredient2:"Place bread slices on a baking sheet under the preheated broiler until toasted, 1 to 2 minutes.",
      ingredient3:"Mix together mashed avocados, red onion, and cilantro in a bowl",
      ingredient4:" Spread on toasted bread and sprinkle with Parmesan cheese.",
      ingredient5:"Return to broiler until cheese is melted, 2 to 3 minutes.",
      ingredient6:""

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






