import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Card2 from "./Card"

//create your first component
const Home = () => {
    return (
        <>
            <NavBar
                title="Start bootstrap"
                navLabel1="Home"
                navLabel2="About"
                navLabel3="Services"
                navLabel4="Contact"
            />

            <Jumbotron
                greeting="A Warm Welcome!"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                button="Call to action!"
            />
        
         <Card
            cardTitle="Card title"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            cardButton="Find Out More!"
            />
        
    
        </>
    );
};

export default Home;