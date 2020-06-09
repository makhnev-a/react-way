import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching, toogleFollowingProgress,
    unfollow
} from "../../redux/users.reducer";
import Preloader from "../common/Preloader";
import {usersApi} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        // this.props.toggleFetching(true);
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.toggleFetching(false);
        //     this.props.setUsers(data.items);
        //     // this.props.setTotalUsersCount(data.totalCount);
        //     this.props.setTotalUsersCount(50);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true);
        usersApi.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                    toogleFollowingProgress={this.props.toogleFollowingProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFetching,
        toogleFollowingProgress,
        getUsersThunkCreator
    })
(UsersContainer);