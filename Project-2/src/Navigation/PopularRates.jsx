import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopularRates = (props) => {
  function setExchangeRate1() {
    props.onSave();
  }

  function setExchangeRate2() {
    props.onSave2();
  }

  function setExchangeRate3() {
    props.onSave3();
  }

  function setExchangeRate4() {
    props.onSave4();
  }

  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  async function saveCurrentPairToAirtable() {
    setIsSaving(true);
    setSaveError(null);
  }

  return (
    <div
      className="popular-rates-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h2>Popular Conversions</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={setExchangeRate1} style={{ padding: "10px 20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            GBP / USD{" "}
          </Link>
        </button>
      </div>

      <div style={{ margin: "20px" }}>
        <button onClick={setExchangeRate2} style={{ padding: "10px 20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            EUR / USD{" "}
          </Link>
        </button>
      </div>

      <div style={{ margin: "20px" }}>
        <button onClick={setExchangeRate3} style={{ padding: "10px 20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            USD / JPY{" "}
          </Link>
        </button>
      </div>

      <div style={{ margin: "20px" }}>
        <button onClick={setExchangeRate4} style={{ padding: "10px 20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            EUR / GBP{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PopularRates;
