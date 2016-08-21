import React, {Component} from 'react';
import Input from '../Input';
import pureRender from 'pure-render-decorator';

@pureRender
export default class RegularInputDemo extends Component {

  static displayName = 'RegularInputDemo';

  state = {
    error: null,
    value: ''
  }

  render() {
    return (
      <div>
        <div>Value: {this.state.value}</div>
        <div>Error: {this.state.error}</div>
        <Input
          error={this.state.error}
          onUpdate={this._handleUpdate}
          placeholder="Type here..."
          value={this.state.value} />
      </div>
    );
  }

  _handleUpdate = (value, error) => {
    this.setState({error, value});
  }
}
