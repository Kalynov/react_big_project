import { followAC, unFollowAC, setUsersAC, setCurrentPageAC } from '../../redux/usersReducer';
import {Users} from './users';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
     ...state.usersPage,
    };
  };
  

  export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
  } )(Users)