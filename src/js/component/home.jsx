import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./Navbar";

//create your first component
const Home = () => {
	return (
		<>
			
				<NavBar
		title="Start bootscrap"
        navLabel1="Home"
        navLabel2="About"
        navLabel3="Services"
        navLabel4="Contact"
    />
		</>
	);
};

export default Home;
