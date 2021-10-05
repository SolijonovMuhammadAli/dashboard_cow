import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import style from "./mollarcard.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#11cb5f",
    },
    danger: {
      main: "#f00",
      contrastText: "#fff",
    },
  },
});
function Mollarcard({ data, imageHeight }) {
  return (
    <div>
      <h1 className={style.cardheader}>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Grid item key={item.id} xs={6} sm={6} md={4} lg={3}>
            <Card width={250}>
              <CardMedia
                component="img"
                height={imageHeight}
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Code: {item.code}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  Narxi: {item.narxi}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Vazni: {item.kilosi}kg
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Jins: {item.jinsi ? "buqa" : "sigir"}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Tug'ilgan sanasi {item.brath}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Zori: {item.zoti}
                </Typography>
              </CardContent>
              <CardActions>
                <ThemeProvider theme={theme}>
                  <Button size="small" variant="contained" color="primary">
                    Edit
                  </Button>
                  <Button size="small" variant="contained" color="danger">
                    Delete
                  </Button>
                </ThemeProvider>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Mollarcard;
