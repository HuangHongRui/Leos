import React from 'react';
import { Link } from 'react-router-dom';

export default class Info extends React.PureComponent<InfoTypes> {
  public state = {

  };

  public render() {
    return (
      <div>
        Info Works!<br/>
        <button>
          <Link to="home"> onClick </Link>
        </button>
      </div>
    );
  }
}

interface InfoTypes {
  anything?: string
}