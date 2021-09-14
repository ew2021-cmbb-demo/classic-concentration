import React from "react"
import styles from './card.module.css'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "unshown" : true
    };

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    this.setState(prevState => ({
      unshown: !prevState.unshown
    }));
  };

  render() {
    let currentFrontClass = "";
    if (this.state.unshown === false) {
      currentFrontClass = styles.backFaceDown;
    }

    return (
      <div onClick={this.flipCard} className="card">
        <div className={currentFrontClass}>
          <img src="" alt="cardback" />
        </div>
        <div className={styles.cardFace + " bar"}>
          <img src="" alt="keyword" />
        </div>
      </div>
    );
  }
};

export default Card