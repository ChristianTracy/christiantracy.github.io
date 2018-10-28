import React from "react";
import Header from "../components/Header";
import Meta from './Meta';

const Page = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
      <hr />
      <span>made with: Beaker (and hashbase) + NextJS</span>
    </div>
  );
};

export default Page;
