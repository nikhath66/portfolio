import React from "react";
import "./Dashboard.css";

const DashboardContent = (props) => {
  return (
    <div className="Dashboard-content">
      <img className="Dashboard-image" src={props.image} />
      <div className="Dashboard-details">
        <div className="Dashboard-heading">{props.heading}</div>
        <div className="Dashboard-DT">
          <button className="Dashboard-date">{props.date}</button>
          <div className="Dashboard-title">{props.title}</div>
        </div>

        <div className="Dashboard-description">{props.description}</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="Dashboard-page">
      <div className="Dashboard-text">Featured Works</div>
      <div className="Dashboard-container">
        <DashboardContent
          image={"./images/Rectangle 30.png"}
          heading={"Designing Dashboards"}
          date={"2020"}
          title={"Dashboard"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <DashboardContent
          image={"./images/Rectangle 32.png"}
          heading={"Vibrant Portraits of 2020"}
          date={"2018"}
          title={"Illustration"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />

        <DashboardContent
          image={"./images/Rectangle 34.png"}
          heading={"36 Days of Malayalam type"}
          date={"2020"}
          title={"DTypography"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
