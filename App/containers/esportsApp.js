'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import LangView from '../View/lang';

class EsportsApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <LangView
        place={state.place}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.esports
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(EsportsApp);
