import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomButton, { LogoutButton } from "../../components/button/Button";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MyCard from "../../components/card/Card";

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  padding: theme.spacing(3),
  boxSizing: "border-box",
}));

const DashboardTopContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  boxSizing: "border-box",
}));

const Dashboard = ({ user = { username: "teste", role: "player" } }) => {
  return (
    <DashboardContainer>
      <DashboardTopContainer>
        <div>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome,{" "}
            <span style={{ color: "#F1C40F", fontWeight: "bold" }}>
              {user.username}
            </span>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Role:{" "}
            <span style={{ color: "#F1C40F", fontWeight: "bold" }}>
              {user.role}
            </span>
          </Typography>
        </div>
        <div>
          <LogoutButton />
        </div>
      </DashboardTopContainer>
      <CustomButton
        style={{width: 'fit-content'}}
        variant="primary"
        startIcon={<AddIcon />}
        onClick={() => console.log("create ")}
      >
        Add Campaign
      </CustomButton>
      <Grid
        style={{ overflow: "auto", margin: "0px", width: "100%" }}
        container
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 1" content="Details about Campaign 1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 2" content="Details about Campaign 2" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard title="Campaign 3" content="Details about Campaign 3" />
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
