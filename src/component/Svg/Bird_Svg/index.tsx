import * as React from 'react';
import './index.scss';

class Bird extends React.Component {
  render() {
    return (
      <div id="sky">
        <div className="bird">
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="wind"/>
          <div className="bird_body">
            <div className="bird_head"/>
            <div className="bird_wing_left">
              <div className="bird_wing_left_top"/>
            </div>
            <div className="bird_wing_right">
              <div className="bird_wing_right_top"/>
            </div>
            <div className="bird_tail_left"/>
            <div className="bird_tail_right"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Bird;