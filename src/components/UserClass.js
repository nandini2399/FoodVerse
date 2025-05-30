import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userData : "Dummy"
        }
        console.log("In constructor")
    }

    async componentDidMount(){
        console.log("In cdm")

        const data = await fetch("https://api.github.com/users/nandini2399")
        const json = await data.json()
        this.setState({
            userData : json
        })
    }

    componentDidUpdate(){
        console.log("In cdu")
    }

    componentWillUnmount(){
        console.log("In cdum")
    }

    

    render(){
        console.log("In render")
        const {name, location,avatar_url} = this.state.userData
        return (
            <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>City : {location}</h3>
            <img src={avatar_url} />
            </div>
        )
    }
}

export default UserClass