import React, { useState, useEffect } from "react";
import Mollarcard from "./Mollarcard";
import { cow } from "./mollarData";
import MollarSearch from "./MollarSearch";
import style from "./Mollar.module.css";
function Mollar() {
  const [imageHeight, setImageHeight] = useState(250);

  useEffect(() => {
    if (window.innerWidth > 420) {
      setImageHeight(250);
    } else {
      setImageHeight(150);
    }
  }, [imageHeight]);

  return (
    <div className={style.cow_container}>
      <MollarSearch />
      <Mollarcard data={cow} imageHeight={imageHeight} />
    </div>
  );
}

export default Mollar;
