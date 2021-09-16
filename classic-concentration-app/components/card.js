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
  }

  render() {
    let currentFrontClass = "";
    let keywordClass = styles.hideKeyword;

    if (this.state.unshown === false) {
      currentFrontClass = styles.backFaceDown;
      keywordClass = "";
    }

    return (
      <div onClick={this.flipCard} className="card">
        <div className={currentFrontClass}>
          <div className={styles.backGraphic}>Cardback</div>
        </div>
        <div className={keywordClass}>
          <span>{this.props.keyword}</span>
        </div>
      </div>
    );
  }
};

export default Card