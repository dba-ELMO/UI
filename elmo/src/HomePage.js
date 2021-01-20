import React from 'react';
import ElmoNav from './generalComponets/ElmoNav';


function HomePage() {
    let firstNav=[{"text": "Projects", "href": "#projects" }, {"text": "Users", "href": "#users"}, {"text": "Postgresql", "href": "#postgres" }, {"text": "Oracle", "href": "#oracle"}, {"text": "Mongodb", "href": "#mongo"}];
    let secondNav=[{text: "Login", href: "#login"}];
    return (
        <ElmoNav firstNav={mylist} secondNav={secondlist}/>
    );
  }
  
  export default HomePage;