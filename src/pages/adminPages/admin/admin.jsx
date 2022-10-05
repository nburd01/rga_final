import React from 'react'
import Sidebar from "../../../adminComponents/sidebar/Sidebar";
import Widget from "../../../adminComponents/widget/Widget";


export const Admin = () => {
    return (
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <div className="widgets">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
            <div className="charts">
              {/* <Featured /> */}
              {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              {/* <Table /> */}
            </div>
          </div>
        </div>
      );
}
