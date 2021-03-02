import {Component} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../card";
import CardDataGenerator from "../../services/card-data-generator";

import "./app.css";
export default class App extends Component {

    cardDataGenerator = new CardDataGenerator();
     
    state = {
        defaultCardsAmount: this.props.defaultCardsAmount,
        cardsData: this.cardDataGenerator.generateCardsData(this.props.defaultCardsAmount)
    }

    loadCardsData = () => {
        const loadedCardsData = this.cardDataGenerator.generateCardsData(this.props.defaultCardsAmount);
        setTimeout(() => {
            this.setState({
                cardsData: this.state.cardsData.concat(loadedCardsData)
            });
        }, 1500);
    }

    render() {
        const {cardsData} = this.state;
        console.log(cardsData);
        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={cardsData.length}
                    next={this.loadCardsData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>
                        {cardsData.map((cardData, index) => (<Card key={index} data={cardData}/>))}
                </InfiniteScroll>
            </div>
        );
    }
}