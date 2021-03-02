import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../card";
import CardDataGenerator from "../../services/card-data-generator";

import "./app.css";
export default function App(props) {

    const cardDataGenerator = new CardDataGenerator();
     
    const [defaultCardsAmount, setDefaultCardsAmount] = useState(props.defaultCardsAmount);
    const [cardsData, setCardsData] = useState(cardDataGenerator.generateCardsData(defaultCardsAmount));
 
    const loadCardsData = () => {
        const loadedCardsData = cardDataGenerator.generateCardsData(props.defaultCardsAmount);
        setTimeout(() => {
            setCardsData(cardsData.concat(loadedCardsData));
        }, 1500);
    }

    return (
        <div className="container">
            <InfiniteScroll
                dataLength={cardsData.length}
                next={loadCardsData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                    {cardsData.map((cardData, index) => (<Card key={index} data={cardData}/>))}
            </InfiniteScroll>
        </div>
    );
}