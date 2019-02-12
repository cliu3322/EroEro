import React, { Component } from 'react';
import { connect } from "react-redux";
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import Shuffle from './shuffle';
import actions from "../../redux/recordlist/actions";



class ShuffleShell extends Component {

  constructor(props) {
    super(props);

    const { initData } = this.props;
    initData(this.props.match.params);


    this.state = {

    };

  }



  render() {
    return (


        <Shuffle dfs={this.props.recordlist}/>

    );
  }
}


function mapStateToProps(state) {
  return {
    recordlist: state.RecordList.recordlist
  };
}

export default connect(mapStateToProps, actions)(ShuffleShell);
