import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Table from "./TableIshchilar";
import { rows } from "./data";

function Ishchilar() {
  //const [familya, setFamilya] = useState("");
  //const [name, setName] = useState("");

  const handleChange1 = (e) => {
    console.log(e.target.value);
  };
  // const handleChange2 = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          onChange={handleChange1}
          label="Familya"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          //onChange={handleChange2}
          label="Ism"
          variant="standard"
        />
      </Box>
      <Table rows={rows} />
    </div>
  );
}

export default Ishchilar;
