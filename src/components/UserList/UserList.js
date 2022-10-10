import React from 'react';
import {getUsers} from '../api';
import UserCard from './UserCard';
import './app.css'
class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: []
        }
    }
    componentDidMount(){
        getUsers().then(data => {
            const {results} = data;
            this.setState({
                user: results
            })
        });
    }
    renderUser() {
        const {user} = this.state;
        return user.map((user) => <UserCard user={user} key={user.email}/>)
    }
    render(){
        const {user} = this.state;
        return(
            <section className='card-wrapper'>
             {user.length ? this.renderUser() : null}
            </section>
        )
    }
}


export default UserList;