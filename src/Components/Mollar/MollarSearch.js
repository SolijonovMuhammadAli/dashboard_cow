import React from "react";
import {
  TextField,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import style from "./search.module.css";

const currencies = [
  {
    value: "all",
    label: "Hammasi",
  },
  {
    value: "shiv",
    label: "shivet",
  },
  {
    value: "gol",
    label: "gollanski",
  },
];
const jinss = [
  { value: "all", label: "Hammasi" },
  {
    value: "er",
    label: "Buqa",
  },
  {
    value: "ayol",
    label: "Sigir",
  },
];

function MollarSearch() {
  const [currency, setCurrency] = React.useState("");
  const [jins, setjins] = React.useState("");
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange2 = (event) => {
    setjins(event.target.value);
  };

  return (
    <div>
      <div></div>
      <div className={style.cow_form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <TextField
              id="standard-search"
              label="Kodi"
              type="search"
              variant="standard"
            />{" "}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Zoti</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={currency}
                onChange={handleChange1}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <TextField id="standard-basic" label="Yoshi" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Jinsi
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={jins}
                onChange={handleChange2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {jinss.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MollarSearch;
