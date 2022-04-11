import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Message,
  Container,
  Segment,
} from "semantic-ui-react";


import web3 from "../ethereum/web3";
import { Link } from "../routes";
import IndexPage from "./components/IndexPage";


class GPOIndex extends Component {
  state = {
    password: "",
    lpassword: "",

    mail: "",
    lmail: "",

    institute: "",
    errorMessage: "",
    lerrorMessage: "",
    auth: "",
    db: "",
  };

  onSubmitFormlogin = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log("i am here");
    signInWithEmailAndPassword(
      this.state.auth,
      this.state.lmail,
      this.state.lpassword
    )
      .then((cred) => {
        console.log("user logged in ", cred.user);
      })
      .catch((err) => {
        this.setState({ lerrorMessage: err.message });
      });
    this.setState({ lpassword: "", lmail: "" });
  };
  

  render() {
    return (
      <IndexPage>
        <Container>
          <Segment>
          <h1>Hello</h1>
          <Button
              
              color="teal"
            >
              <Link route="/gpoPage/">GPO</Link>
            </Button>
            <Button
              
              color="teal"
            
            >
             <Link route="/manufacturerPage/">Manufacturer</Link>
            </Button>
            <Button
              
              color="teal"
            
            >
             <Link route="/serviceProviderPage/">Service Provider</Link>
              
            </Button>
            <Button
              
              color="teal"
              
            >
             <Link route="/distributorPage/">Distributor</Link>
              
            </Button>
          </Segment>
        </Container>
      </IndexPage>
    );
  }
}

export default GPOIndex;
