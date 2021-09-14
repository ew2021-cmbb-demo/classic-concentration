class Header extends React.Component {
  //Shuffling algorithm for reset button
  //Update score algorithm

  render() {
    return (
      <div>
        <h1>Classic Concentration</h1>
        <div className="sub-header">
          <div className="moves">
            <p>Moves:</p>
          </div>
          <div className="score-board">
            <div className="p1-score"></div>
            <div className="p2-score"></div>
          </div>
          <div className="reshuffle">
            <button>Restart</button>
          </div>
        </div>
      </div>
    );
  }
};