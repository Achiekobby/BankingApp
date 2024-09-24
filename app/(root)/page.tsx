import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Achie" };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext={
              "Access and Manage your own Account and Transactions Efficiently"
            }
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1350}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
