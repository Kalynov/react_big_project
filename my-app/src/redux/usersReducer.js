const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage:1

}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
      case FOLLOW: {
        return {
          ...state,
          users: state.users.map(user => {
            if (user.id === action.userId){
              return {...user, followed: true }
            }
            return user
          })
        }
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map(user => {
            if (user.id === action.userId){
              return {...user, followed: false }
            }
            return user
          })
        }
      }
      case SET_USERS: {
        return {
          ...state,
          users: [...action.data.items],
          totalCount: action.data.totalCount
        }
      }
      case SET_CURRENT_PAGE: {
        return {
          ...state,
          currentPage: action.page
        }
      }
      default: return state;
    }

  
}

export const followAC = (userId) =>({type: FOLLOW, userId});

export const unFollowAC = (userId) =>({ type: UNFOLLOW, userId})

export const setUsersAC = (data) =>({ type: SET_USERS, data})

export const setCurrentPageAC = (page) =>({ type: SET_CURRENT_PAGE, page})


export default usersReducer;