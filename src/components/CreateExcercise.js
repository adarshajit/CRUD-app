import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios';

class CreateExcercise extends Component{
    constructor(props){
        super(props)
        this.state ={
            username : "",
            description : "",
            duration : 0,
            date : new Date(),
            users : []
        }

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration : e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const excercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        axios.post('http://localhost:5000/excercises/add',excercise)
        .then(res => console.log(res.data));

        console.log(excercise)
    
    }





    render(){
        return(
            <div>
                <h3>Create a new Excercise!</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                                required
                                className ="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(user=>{
                                        return(
                                            <option key={user} value={user}>
                                            {user}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                            <input type="text"
                                   className="form-control"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}>
                            </input>
                    </div>

                    <div className="form-group">
                        <label>Duration (in mins)</label>
                            <input type="text"
                                   className="form-control"
                                    value={this.state.duration}
                                    onChange={this.onChangeDuration}>
                            </input>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                            <div>
                            <DatePicker
                                    value={this.state.date}
                                    onChange={this.onChangeDate}/>
                            </div>
                     </div>

                     <div className="form-group">
                         <input type="submit" value="create log" className="btn btn-primary" />
                     </div>

                </form>
            </div>
        )
    }
}

export default CreateExcercise;