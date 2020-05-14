import {connect} from "react-redux";
import Users from './Users';
import {followAC, setCurrentPageAc, setTotalUsersCountAc, setUsersAc, unfollowAC} from "../../redux/users.reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAc(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAc(totalCount));
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);