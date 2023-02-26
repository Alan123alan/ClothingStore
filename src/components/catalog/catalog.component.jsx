import Section from "../section/section.component";
import "./catalog.styles.scss"

const Catalog = (props)=>{
    const {sections} = props;
    return (
        <div className="catalog-container">
            {sections.map((section)=><Section key={section.id} title={section.title} imageUrl={section.imageUrl}/>)}
        </div>
    )
}

export default Catalog