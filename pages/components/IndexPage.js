import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";

const IndexPage = (props) => {
  return (
    <div>
        <Head>
          <link
            async
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
          />
        </Head>
        {props.children}
    </div>
  );
};
export default IndexPage;
