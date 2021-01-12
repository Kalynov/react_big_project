import React, { useEffect } from "react"
import classes from './users.module.css';
import axios from "axios";



export const Users = (props) => {

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`).then(respons => {
      props.setUsers(respons.data)
    })
  },[props.currentPage])



  const pagesCount = Math.ceil(props.totalCount / props.pageSize)

  const pages = []
  for (let i = 0; i < pagesCount; i++){
    pages.push(i+1);
  }


  return (
    <div>
      <div>
        { 
          pages.map(el => {
            let pageNumberClass = `${classes.pages} ${props.currentPage === el && classes.active}`
            return <span 
              onClick = {() => {
                props.setCurrentPage(el)
              }}
              key = {el} 
              className={pageNumberClass}>{el}</span>
          })  
        }
      </div>
      {
        props.users.map(user => <div key = {user.id}>
          <span>
            <div>
              <img className = {classes.avatar} src = {user.photos.small || "https://w7.pngwing.com/pngs/931/209/png-transparent-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black-silhouette.png"}/> 
            </div>
            <div>
              {
                user.followed? <button onClick = {() => props.unFollow(user.id)}>Unfollow</button> :
                <button onClick = {() => props.follow(user.id)}>Follow</button>
              }
              
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div> <div>{user.status}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}