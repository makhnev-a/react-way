const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
        };
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            })
        };
    } else if (action.type === SET_USERS) {
        return {...state, users: action.users}
    } else if (action.type === SET_CURRENT_PAGE) {
        return {...state, currentPage: action.currentPage}
    } else if (action.type === SET_TOTAL_USERS_COUNT) {
        return {...state, totalUsersCount: action.count}
    } else {
        return state;
    }
};

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAc = (users) => ({type: SET_USERS, users});
export const setCurrentPageAc = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCountAc = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});