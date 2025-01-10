import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInfo } from '../../actions/userActions';

function mapStateToProps(state) {
    return {
        userinfo : state.userinfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeInfo
    };
}

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Homepage);