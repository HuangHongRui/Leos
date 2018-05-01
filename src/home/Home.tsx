import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.PureComponent {
  public state = {
    a: 1
  };

  public render() {
    return (
      <div>
        Home Works!<br/>
        <button>
          <Link to="/info"> Route Jump To Info </Link>
        </button>
      </div>
    );
  }
}

export default Home;
