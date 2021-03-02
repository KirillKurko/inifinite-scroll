import "./card.css";

export default function Card(props) {

    const {header, date, status, descriptionText, logoLink, buttonText, linkText} = props.data;
    
    return (
        <div className="card">
            <div className="header">
                <div className="title">
                    <h1 className="title--text">{header}</h1>
                    <h2 className="title--date">{date}</h2>
                </div>
                <div className="footer">
                    <p className="footer--status">{status} <a href="#" className="link" onClick={() => alert()}>Link</a></p>
                </div>
            </div>
            <div className="main">
                <img className="main--logo" src={logoLink} alt="logo"/>
                <p className="main--description">{descriptionText}</p>
                <button className="main--button" onClick={() => alert()}>{buttonText}</button>
                <a href="#" className="link" onClick={() => alert()}>{linkText}</a>
            </div>
        </div>
    );
}