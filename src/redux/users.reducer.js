const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true
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
        return {...state, currentPage: action.pageNumber}
    } else if (action.type === SET_TOTAL_USERS_COUNT) {
        return {...state, totalUsersCount: action.count}
    } else if (action.type === TOGGLE_IS_FETCHING) {
        return {...state, isFetching: action.isFetching};
    } else {
        return state;
    }
};

export default usersReducer;

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});