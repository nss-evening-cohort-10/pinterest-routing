import React from 'react';

import './Board.scss';

class Board extends React.Component {
  render() {
    const { board } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
