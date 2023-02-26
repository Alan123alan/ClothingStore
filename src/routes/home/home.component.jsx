import { useState } from "react";
import Catalog from "../../components/catalog/catalog.component";

const Home = ()=>{
    const [sections, setSections] = useState([
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": "https://media.istockphoto.com/id/979833570/es/foto/zapatillas-de-diferente-color.jpg?s=612x612&w=is&k=20&c=aP4zjY_3hxtzcgu7qlSH-465WMtSd_ps54GY-YMR8Rk="
        },
        {
          "id": 4,
          "title": "Women´s",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "Men´s",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]);
    
    return (
        <Catalog sections={sections}/>
    );
};

export default Home;