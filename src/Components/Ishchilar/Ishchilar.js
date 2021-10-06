import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Table from "./TableIshchilar";
import { rows } from "./data";

function Ishchilar() {
  const [data, setData] = useState(rows);
  const [familya, setFamilya] = useState("");
  const [name, setName] = useState("");

  const handleChange1 = (e) => {
    setFamilya(e.target.value);
    let newsRows = rows.filter((item) =>
      item.person.familya.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setData(newsRows);
    setName("");
  };
  const handleChange2 = (e) => {
    setName(e.target.value);
    let newsRows = rows.filter((item) =>
      item.person.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setData(newsRows);
    setFamilya("");
  };
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
          value={familya}
        />
        <TextField
          id="standard-basic"
          onChange={handleChange2}
          label="Ism"
          variant="standard"
          value={name}
        />
      </Box>
      <Table rows={data} />
    </div>
  );
}

export default Ishchilar;
