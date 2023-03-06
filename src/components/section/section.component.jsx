import { Link } from "react-router-dom";
import "./section.styles.scss"


const Section = (props)=>{
    const {title, imageUrl} = props;
    return (
        <div className="section-container">
            <div style={{backgroundImage:`url(${imageUrl})`}} src={imageUrl}/>
                <div className="section-body-container">
                    <h1>{title}</h1>
                    <Link to={title.toLowerCase()}><p>Shop Now</p></Link>
                </div>
        </div>
    )
}

export default Section;