import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectUser} from '../actions/index'

class UserList extends Component {

    createList() {
        return this.props.user.map(user => {
            return (<li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first}</li>)
        })

    }

    getDetails(){
        return(
            <ul>
                <li>{this.props.activeUser.first +" " +this.props.activeUser.last}</li>
                <li>{this.props.activeUser.description}</li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.createList()}
                </ul>
                {
                 this.props.activeUser ? (
                     <div>
                         {this.getDetails()}
                    </div>
                 )              
                 : null                   
                }
                
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        user: state.users,
        activeUser:state.activeUser
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser:selectUser
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(UserList);