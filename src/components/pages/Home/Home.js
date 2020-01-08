import React from 'react';

import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

import Board from '../../shared/Board/Board';

import './Home.scss';

class Home extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('error from get boards', err));
  }

  render() {
    return (
      <div className="Home">
        <h1>HOME</h1>
        <div className="boards d-flex flex-wrap">
          {this.state.boards.map((board) => <Board key={board.id} board={board} />)}
        </div>
      </div>
    );
  }
}

export default Home;
