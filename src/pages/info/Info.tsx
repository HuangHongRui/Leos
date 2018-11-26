import * as React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Info extends React.PureComponent<InfoTypes> {
  state = {};

  render() {
    return (
      <div>
        Info Works!<br/>
        <button onClick={() => {
          // tslint:disable-next-line
          console.log('☞☞☞ 9527 Info 14', this.props);
        }}>
          haha
          {/*<Link to="home"> onClick </Link>*/}

        </button>
      </div>
    )
      ;
  }
}

interface InfoTypes {
  anything?: string;
}

// tslint:disable-next-line
function mapStateToProps(state: any) {
  // tslint:disable-next-line
  console.log(state);
}

// tslint:disable-next-line
let cet: any = connect(mapStateToProps);

export default cet(Info);
