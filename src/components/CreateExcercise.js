import React, {Component} from 'react';
import DatePicker from 'react-date-picker';

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

    componentDidMount(){
        this.setState({
            users : ["test"],
            username: "test"
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

        console.log(excercise)
        window.location = "/";
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