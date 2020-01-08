import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    deleteBoard: Proptypes.func,
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { deleteBoard, board } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const { board } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-danger" onClick={this.deleteBoardEvent}>X</button>
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <Link className="btn btn-primary" to={`/board/${board.id}`}>View Board</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
