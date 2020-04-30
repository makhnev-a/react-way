import React from "react";
import {connect} from "react-redux";
import Users from './Users';
import {followAC, setUsersAc, unfollowAC} from "../../redux/users.reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);