import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/charts';
import * as Actions from '../actions/index';

class App extends Component {
    propTypes = {
        actions: PropTypes.object,
        state: PropTypes.object
    }
    constructor(props) {
        super(props);
    }

    render() {
        const { actions, state} = this.props;
        const indexBloat = state.metrics.top_index_bloat.map((v)=> v.bloat_ratio);
        const xIndexBloat = state.metrics.top_index_bloat.map((v)=> v.timestamp);
        const indexWaste = state.metrics.total_index_bloat_bytes.map((v)=> v.bloat_bytes);
        const xIndexWaste = state.metrics.total_index_bloat_bytes.map((v)=> v.timestamp);
        const tableBloat = state.metrics.top_table_bloat.map((v)=> v.bloat_ratio);
        const xTableBloat = state.metrics.top_table_bloat.map((v)=> v.timestamp);
        const tableWaste = state.metrics.total_table_bloat_bytes.map((v)=> v.bloat_bytes);
        const xTableWaste = state.metrics.total_table_bloat_bytes.map((v)=> v.timestamp);
        return (
            <div>
                <Chart data={indexBloat} x={xIndexBloat}/>
                <Chart data={indexWaste} x={xIndexWaste}/>
                <Chart data={tableBloat} x={xTableBloat}/>
                <Chart data={tableWaste} x={xTableWaste}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);