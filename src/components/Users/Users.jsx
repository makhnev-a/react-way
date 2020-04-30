import React from "react";
import styles from './users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Dmitriy',
                status: 'I am a boss',
                photoUrl: 'https://n1s1.starhit.ru/87/b3/45/87b3453dd9fc7ed97f1d71095a630e77/480x497_0_e341539b548f3e7fb651c9c5d9ca81b2@480x497_0xac120003_7868009131554467564.jpg',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: true,
                fullName: 'Andrew',
                status: 'I am a boss too1',
                photoUrl: 'https://n1s1.starhit.ru/87/b3/45/87b3453dd9fc7ed97f1d71095a630e77/480x497_0_e341539b548f3e7fb651c9c5d9ca81b2@480x497_0xac120003_7868009131554467564.jpg',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                followed: false,
                fullName: 'Sasha',
                status: 'I am a boss too2',
                photoUrl: 'https://n1s1.starhit.ru/87/b3/45/87b3453dd9fc7ed97f1d71095a630e77/480x497_0_e341539b548f3e7fb651c9c5d9ca81b2@480x497_0xac120003_7868009131554467564.jpg',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => {
                    console.log(u);
                    return <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photoUrl}
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>
                })
            }
        </div>
    );
};

export default Users;