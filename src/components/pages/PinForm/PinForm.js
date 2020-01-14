import React from 'react';

import './PinForm.scss'
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  componentDidMount() {
    const { pinId } = this.props.match.params;
    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ pinTitle: pin.title, pinImageUrl: pin.imageUrl })
        })
        .catch((err) => console.error('error with get single pin', err));
    }

  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { boardId, pinId } = this.props.match.params;
    const editPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
      boardId,
    }
    pinData.editPin(pinId, editPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error with edit pin', err));
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
      boardId,
    }
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error with save pin', err));
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  render () {
    const { pinTitle, pinImageUrl } = this.state;
    const { pinId } = this.props.match.params;
    return (
      <form className="PinForm">
        <div className="form-group">
          <label htmlFor="pin-title">Pin Title:</label>
          <input
            type="text"
            className="form-control"
            id="pin-title"
            placeholder="cat pic"
            value={pinTitle}
            onChange={this.titleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-image-url">Pin Image Url:</label>
          <input
            type="text"
            className="form-control"
            id="pin-image-url"
            placeholder="https://www.google.com"
            value={pinImageUrl}
            onChange={this.imageUrlChange}
          />
        </div>
        { pinId
          ? <button className="btn btn-secondary" onClick={this.editPinEvent}>Edit Pin</button>
          : <button className="btn btn-secondary" onClick={this.savePinEvent}>Save Pin</button>
        }
      </form>
    );
  }
}

export default PinForm;
