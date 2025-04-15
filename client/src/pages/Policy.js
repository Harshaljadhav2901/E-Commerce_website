import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b> Data Collection:</b> We collect certain data from our customers to provide them with the best possible shopping experience. This data includes personal information, such as name, address, and email address, as well as browsing behavior and cookies. </p>
          
          <p><b> Security Measures: </b> We take the security of our customer's data seriously and have implemented various measures to protect it. This includes encryption, firewalls, and access controls to prevent unauthorized access, modification, or destruction of data. We regularly review and update our security protocols to ensure they are up-to-date and effective.</p>

          <p><b> Opt-Out Options: </b> Our customers have the right to opt-out of data collection or unsubscribe from marketing communications. They can do this by contacting our customer service team, and we will promptly process their request. Please note that it may take up to 30 days for the request to be fully processed.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
