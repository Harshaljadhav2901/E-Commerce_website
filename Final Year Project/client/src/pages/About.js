import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About US"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to OneClickAway, the ultimate online shopping destination for all your needs. We are a team of passionate individuals dedicated to providing you with the best possible shopping experience. Our platform is designed with you in mind, making it easy and convenient to find what you're looking for with just one click. We offer a wide range of products at affordable prices, without compromising on quality. At OneClickAway, we value our customers and strive to deliver exceptional customer service. Shop with us today and experience the difference.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
