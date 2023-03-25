import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import Catalog from "../../components/catalog/catalog.component";
import { CatalogContainer, SectionContainer, SectionBodyContainer, BackgroundImage} from "./home.styles.jsx";


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
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "Womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "Mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]);
    
    return (
        <Catalog sections={sections}/>
    );
};

const Catalog = (props)=>{
  const {sections} = props;
  return (
      <CatalogContainer>
          {sections.map((section)=><Section key={section.id} title={section.title} imageUrl={section.imageUrl}/>)}
      </CatalogContainer>
  )
}

const Section = (props)=>{
  const {title, imageUrl} = props;
  const navigate = useNavigate();
  const navigateToShopSection = (section)=>{
    navigate(`shop/${section}`);
  };
  return (
      <SectionContainer>
          <BackgroundImage src={imageUrl}/>
              <SectionBodyContainer>
                  <h1>{title}</h1>
                  <p onClick={()=>{navigateToShopSection(title)}}>Shop Now</p>
              </SectionBodyContainer>
      </SectionContainer>
  )
}

export default Home;