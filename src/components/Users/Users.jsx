import React from "react";
import cn from "classnames";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.webp";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map((page, item) => {
                            return (
                                <span
                                    key={`page-${item}`}
                                    className={cn({[styles.selectedPage]: props.currentPage === page})}
                                    onClick={(e) => props.onPageChanged(page)}>
                                    {page}</span>
                            );
                        }
                    )
                }
            </div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                alt="Аватарка"
                                className={styles.usersPhoto}
                            />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>
                })
            }
        </div>
    );
};

export default Users;