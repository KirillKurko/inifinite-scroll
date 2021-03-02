import randomSentence from "random-sentence";

export default class CardDataGenerator {

    _headerTextWordsLength = 3;
    _statusWordsLength = 3;
    _logoLink = "./images/image.jpg";
    _descriptionTextWordsLength = 8;
    _buttonTextWordsLength = 3;
    _linkTextWordsLength = 3;

    generateCardData = () => {
        return {
            header: this.generateText(this._headerTextWordsLength),
            date: this.generateDate(),
            status: this.generateText(this._statusWordsLength),
            descriptionText: this.generateText(this._descriptionTextWordsLength),
            logoLink: this._logoLink,
            buttonText: this.generateText(this._buttonTextWordsLength),
            linkText: this.generateText(this.linkTextWordsLength)
        }
    }

    generateText = (wordsLength) => {
        return randomSentence({wordsLength});
    }

    generateDate = () => {
        return new Date(Date.now).toDateString();
    }
}