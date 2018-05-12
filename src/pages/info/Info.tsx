import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Info extends React.PureComponent<InfoTypes> {
  state = {

  };

  render() {
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

function mapStateToProps(state: any) {
  console.log(state)
}

let cet: any = connect(mapStateToProps);

export default cet(Info)
