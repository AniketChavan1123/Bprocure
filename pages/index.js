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
  
  render() {
    return (
      <IndexPage>
        <Container>
          <Segment>
          <h1>Hello Stakeholders</h1>
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
