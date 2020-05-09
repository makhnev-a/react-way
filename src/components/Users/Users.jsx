import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/img/user.webp'
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.getUsers();
    };

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                this.props.setUsers(response.data.items);
            });
        }
    };

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {
                    this.props.users.map(u => {
                        console.log(u);
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
                                        this.props.unfollow(u.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
    }
}

export default Users;