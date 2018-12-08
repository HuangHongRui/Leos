import * as React from 'react';
import './index.scss';

class Pagination extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }

  render() {
    let page = this.props.page;
    return (
      <div className="pagination">

        <button className={page && page > 0 ? '' : 'v-vanish'}>
          NEWER POSTS >
        </button>
        <button> ODER POSTS > </button>

      </div>
    );
  }
}

export default Pagination;

interface PropsType {
  page?: number;
}

interface StateType {

}
