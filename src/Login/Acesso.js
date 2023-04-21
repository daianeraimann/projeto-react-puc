import React, { Component } from "react";
import conseguiu from "./conseguiu.jpg";
import firebase from '../data/Firebase';
 

class Acessar extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: ""

        }
    }
async componentDidMount(){

    await firebase.auth().onAuthStateChanged( async(user)=>{
        if (user){
            var uid = user.uid;

            await firebase.firestore().collection("users").doc(uid).get()
            .then((retorno)=>{
                this.setState({
                    firstName: retorno.data().firstName,
                    lastName: retorno.data().lastName

                })

            })
        }
    })
}

render(){
    return(
        <div>
             <h1>Conseguiu!!</h1>
             Nome: {this.state.firstName} <br/>
             Sobrenome: {this.state.lastName}<br/>

            <img src={conseguiu} alt="coringando" />

        </div>
    )
}

}

export default Acessar;