import React, { useState, useEffect } from "react";
import Mollarcard from "./Mollarcard";
import { cows } from "./mollarData";
import {
  TextField,
  MenuItem,
  FormLabel,
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import style from "./Mollar.module.css";

const forset = [];
cows.forEach((item) => forset.push(item.zoti));
const currencies = ["Hammasi", ...new Set(forset)];

const jinsset = [];
cows.forEach((item) => jinsset.push(item.jins));
const jinsi = ["Hammasi", ...new Set(jinsset)];

function Mollar() {
  const [data, setData] = useState(cows);
  const [imageHeight, setImageHeight] = useState(250);
  const [code, setCode] = useState("");
  const [currency, setCurrency] = useState("");
  const [value, setValue] = useState("");

  const handleCode = (e) => {
    setCode(e.target.value);
    const newCode = cows.filter((item) => item.code.includes(e.target.value));
    setData(newCode);
  };
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
    if (event.target.value === "Hammasi") {
      setData(cows);
    } else {
      setData(cows.filter((item) => item.zoti === event.target.value));
    }
  };
  const handleChange = (e) => {
    let val = e.target.value;
    setValue(val);
    if (val === "sigir") {
      setData(cows.filter((item) => val === item.jins));
    } else if (val === "buzoq") {
      setData(cows.filter((item) => val === item.jins));
    } else if (val === "buqa") {
      setData(cows.filter((item) => val === item.jins));
    } else {
      setData(cows);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 420) {
      setImageHeight(250);
    } else {
      setImageHeight(150);
    }
  }, [imageHeight]);

  return (
    <div className={style.cow_container}>
      <div>
        <div className={style.cow_form}>
          <TextField
            id="standard-search"
            label="Kodi"
            type="number"
            variant="standard"
            value={code}
            onChange={handleCode}
          />
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Zoti</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={currency}
              onChange={handleChange1}
            >
              {currencies.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel component="legend">Jinsi</FormLabel>
            <RadioGroup
              row
              aria-label="jinsi"
              name="row-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {jinsi.map((item) => (
                <FormControlLabel
                  key={item}
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <Mollarcard data={data} imageHeight={imageHeight} />
    </div>
  );
}

export default Mollar;
