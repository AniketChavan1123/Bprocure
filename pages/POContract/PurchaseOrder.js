import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Message,
  Segment,
  Divider,
  Grid,
  Item,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import PurchaseOrder from "../../ethereum/PurchaseOrderCon";
import web3 from "../../ethereum/web3";
import { initializeApp } from "firebase/app";
import {
  collection,
  query,
  where,
  getDoc,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  updateDoc,
  setDoc,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

class POContract extends Component {
  state = {
    poNumber: "",
    poNumberDS:"",
    distributorAdd: "",
    loadingPO: false,
    errorMessageSPO: "",
    errorMessageDS: "",
    contractNumber: "",
    statusCon: [
      "New Contract",
      "Negotiating",
      "Price Confirmed",
      "Price Rejected",
      "Contract Closed",
    ],
    loading: false,
    auth:'',
    db:''
  };
  async componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDTzxKgz8d5f5DSJnLkGPtsSPRDoNMlfxU",
      authDomain: "bpro-da9ad.firebaseapp.com",
      projectId: "bpro-da9ad",
      storageBucket: "bpro-da9ad.appspot.com",
      messagingSenderId: "227407014941",
      appId: "1:227407014941:web:b36138e58e19d2b0b96af4",
    };
    initializeApp(firebaseConfig); // initialize app

    const d = getFirestore(); // initialize service
    const aut = getAuth();
    this.setState({ auth: aut });
    this.setState({ db: d });
  }
  static async getInitialProps(props)
  {
    const {address,contract} = props.query;
    return {address,contract};

  }

  onSubmitPO = async (event) => {
    event.preventDefault();
    this.setState({ loadingPO: true });
    try {
      
     
      console.log("ipfs code");
      console.log("object.push( Returned CID as PO Number )");
      console.log("{this.setState({POnumber:{this.state.object[6]}})");
      console.log("i am here");
      const accounts = await web3.eth.getAccounts();
      const purchaseOrder=PurchaseOrder(this.props.address);

      await purchaseOrder.methods
        .submitPO(this.state.poNumber, this.state.distributorAdd)
        .send({
          from: accounts[0],
        });
        let gpo,instituteName;
      const colRefSer = collection(this.state.db, "ServiceProvider");
      const q=query(colRefSer,where("contractNumber","==",this.state.contractNumber))
      await getDocs(q).then((snapshot)=>{
        snapshot.docs.forEach((doc) => {
          gpo=doc.data().gpo;
          instituteName=doc.data().institute;
        });
        
      })
      console.log(instituteName,gpo);
      const colRefDis=collection(this.state.db,"Distributor");
      addDoc(colRefDis, {
        institute: instituteName,
        gpo: gpo,
        poNumber: this.state.poNumber,
        distributor:this.state.distributorAdd,
        contractNumber:this.state.contractNumber,
        po:this.props.address
      }).then(() => {
        console.log("added");
      });


    } catch (err) {
      this.setState({
        errorMessageSPO: err.message,
      });
    }
    this.setState({ loadingPO: false });
  };

  onSubmitDeliveryStatus = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    try {
      console.log("i am here");
      const accounts = await web3.eth.getAccounts();
      const purchaseOrder=PurchaseOrder(this.props.address);
      await purchaseOrder.methods
        .deliverStatus(this.state.poNumberDS)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({
        errorMessageDS: err.message,
      });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Purchase Order</h3>
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h5>Submit Purchase Order (provider)</h5>
                <Form onSubmit={this.onSubmitPO} error={!!this.state.errorMessageSPO}>
                  <Form.Field style={{ marginTop: "20px" }}>
                    <label>Enter Contract Number</label>
                    <Input
                      disabled
                      label="number"
                      labelPosition="right"
                      value={this.props.contract}
                      onChange={(event) =>
                        this.setState({ contractNumber: event.target.value })
                      }
                    ></Input>
                  </Form.Field>

                  <Form.Field style={{ marginTop: "20px" }}>
                    <label>Enter Distributor's Address</label>
                    <Input
                      label="address"
                      labelPosition="right"
                      value={this.state.distributorAdd}
                      onChange={(event) =>
                        this.setState({ distributorAdd: event.target.value })
                      }
                    ></Input>
                  </Form.Field>

                  <Form.Field style={{ marginTop: "20px" }}>
                    <label>Your Purchase Order Number</label>
                    <Input
                      label="number"
                      labelPosition="right"
                      value={this.state.poNumber}
                      onChange={(event) =>
                        this.setState({ poNumber: event.target.value })
                      }
                    ></Input>
                  </Form.Field>
                  <Message error header="Oops!" content={this.state.errorMessageSPO} />

                  <Button loading={this.state.loadingPO} color="teal">
                    Submit PO
                  </Button>
                </Form>

                <Divider section />
                <h5>Delivery status (Distributor)</h5>
                <Form onSubmit={this.onSubmitDeliveryStatus} error={!!this.state.errorMessageDS}>
                  <Form.Field style={{ marginTop: "20px" }}>
                    <label>Enter Purchase Order Number</label>
                    <Input
                      label="number"
                      labelPosition="right"
                      value={this.state.poNumberDS}
                      onChange={(event) =>
                        this.setState({ poNumberDS: event.target.value })
                      }
                    ></Input>
                  </Form.Field>
                  <Message error header="Oops!" content={this.state.errorMessageDS} />

                  <Button loading={this.state.loading} color="teal">
                    Delivery Done
                  </Button>
                </Form>
              </Grid.Column>
              
            </Grid.Row>
          </Grid>
        </Segment>
      </Layout>
    );
  }
}
export default POContract;
