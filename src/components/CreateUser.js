import React, {Component} from 'react';
import axios from 'axios';

class CreateUser extends Component{

    constructor(props){
        super(props)
        this.state ={
            username : ""
        }

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data));

        this.setState({
            username: ""
        })

        console.log(user)
    }

    render(){
        return(
            <div>
            <h3>Create a new User!</h3>
            <form onSubmit={this.onSubmit}>
              

                <div className="form-group">
                    <label>User</label>
                        <input type="text"
                               className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                        </input>
                </div>

                 <div className="form-group">
                     <input type="submit" value="create log" className="btn btn-primary" />
                 </div>

            </form>
        </div>
        )
    }
}

export default CreateUser;