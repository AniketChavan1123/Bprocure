import React, { Component } from "react";
import {
  Form,
  Button,
  Grid,
  Input,
  Message,
  Container,
  Segment,
  Header,
  Image,
  Divider,
  Menu,
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

  render() {
    return (
      <IndexPage>
        <div style={{ margin: "20px" }}>
          <Header as="h1">
            <Image
              circular
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-supply-chain-circular-economy-flaticons-lineal-color-flat-icons-2.png"
            ></Image>
            <span style={{ margin: "10px", color: "orange" }}> B-PROCURE</span>
            <Divider></Divider>
          </Header>
          <Container>
            <Grid columns={4}>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button secondary>
                    <Link route={"/gpoPage/"}>
                      <h4 style={{ color: "white" }}>GPO</h4>
                    </Link>
                  </Button>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Button color="teal">
                    <Link route={"/manufacturerPage/"}>
                      <h4 style={{ color: "white" }}>Manufacturer</h4>
                    </Link>
                  </Button>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Button color="teal">
                    <Link route={"/serviceProviderPage/"}>
                      <h4 style={{ color: "white" }}>Service Provider</h4>
                    </Link>
                  </Button>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Button color="teal">
                    <Link route={"/distributorPage/"}>
                      <h4 style={{ color: "white" }}>Distributor</h4>
                    </Link>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </IndexPage>
    );
  }
}

export default GPOIndex;
