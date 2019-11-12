import React from 'react';
import s from './Users.module.css';
import User from "./user/User";
import Psginators from "../common/Paginations";

let Users = ({userData, pageSize, totalUsersCount, currentPage, followingInProgress, onPageChanged, getUnFollowUsers, getFollowUsers}) => {
    return (
        <div className={s.Users}>
            <div className={s.Users}>
                <p>Users</p>
                <Psginators currentPage={currentPage}
                            pageSee={4}
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