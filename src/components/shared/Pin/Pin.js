import React from 'react';

import './Pin.scss';

class Pin extends React.Component {
  render() {
    const { pin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
