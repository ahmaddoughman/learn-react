import React from "react";

class Welcome extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstname : "AHmad",
            lastname : "doughman"
        }
    }

    render(){
        return(
            <>
            <h1>HEllo, age {this.props.age}</h1>
            <p>major {this.props.title}</p>

            <button onClick={() => {
                this.setState({
                    firstname: "ali"
                })
            }}>change name</button>

            <h5>create by, {this.state.firstname} {this.state.lastname}</h5>
            </>
        );
    }

    componentDidMount(){
        this.setState({
            lastname: "karami"
        })
    }

}

export default Welcome;