const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Andrew',
            status: 'I am a boss too1',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too2',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
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
        return {...state, users: [...state.users, action.users]}
    } else {
        return state;
    }
};

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAc = (users) => ({type: SET_USERS, users});