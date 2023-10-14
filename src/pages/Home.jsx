// import bg from "../images/bg.png"
// const Home = ()=>{
//     return (
//         <div style={{backgroundImage:`background-image:url(${bg})`}}>Home Page </div>
//     )
// }

// export default Home 


import React from "react";
import bg from "../images/bg.png";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    
  };

  return <div style={divStyle,i} className="w-full bg-cover">Home Page</div>;
};

export default Home;
