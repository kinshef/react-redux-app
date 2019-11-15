import React from 'react';
import style from './Users.module.css';
import User from "./user/User";
import Paginations from "../common/Paginations";

let Users = ({userData, pageSize, totalUsersCount, currentPage, followingInProgress, getUnFollowUsers, getFollowUsers, onPageChanged}) => {
    return (
        <div className={style.Users}>
            <div className={style.Users}>
                <p>Users</p>
                <Paginations currentPage={currentPage}
                            pageSee={4} //сколько страниц видно справа и слева
                            pageSize={pageSize}
                            onPageChanged={onPageChanged}
                            totalUsersCount={totalUsersCount}/>
                <User userData={userData}
                      followingInProgress={followingInProgress}
                      getUnFollowUsers={getUnFollowUsers}
                      getFollowUsers={getFollowUsers}/>
            </div>
        </div>
    );
}

export default Users;