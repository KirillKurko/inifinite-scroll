import "./card.css";

export default function Card(props) {

    const {header, date, status, descriptionText, logoLink, buttonText, linkText} = props.data;
    
    return (
        <div className="card">
            <div className="header">
                <h1 className="header--text">{header}</h1>
                <h2 className="header--date">{date}</h2>
                <p className="header--status">{status}</p>
            </div>
            <div className="main">
                <img className="main--logo" src={logoLink} alt="logo"/>
                <p className="main--description">{descriptionText}</p>
                <button className="main--button">{buttonText}</button>
                <a href="#" className="main--link">{linkText}</a>
            </div>
        </div>
    );
}