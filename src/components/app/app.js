import {useState, Component} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../card";
import CardDataGenerator from "../../services/card-data-generator";

import "./app.css";

export default class App extends Component {

    cardDataGenerator = new CardDataGenerator();
     
    state = {
        
        cardsData = 
    }

    render() {
        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={this.cardsData.length}
                    next={this.get}>
    
                </InfiniteScroll>
            </div>
        );
    }
}