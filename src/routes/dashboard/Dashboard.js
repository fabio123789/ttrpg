import React from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import { Grid, Typography, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

const StyledTopContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Dashboard = ({ user = {}, campaigns = [] }) => {
  const { name, role } = user;

  return (
    <div style={{ padding: "20px" }}>
      <StyledTopContainer>
        <div>
          <Typography variant="h4">Hello, {name}</Typography>
          <Typography variant="subtitle1">Role: {role}</Typography>
        </div>
        <Button tooltip="Logout" icon={<LogoutIcon />} />
      </StyledTopContainer>
      {role === "DM" && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={() => alert("Create New Card")}
        >
          Create New Card
        </Button>
      )}
      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        {campaigns.map((campaign, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              role={role}
              createdAt={campaign.createdAt}
              description={campaign.description}
              title={campaign.title}
              action={
                role === "DM" ? (
                  <>
                    <Button
                      tooltip="Delete"
                      icon={<DeleteIcon color="error" />}
                    />
                    <Button tooltip="Edit" icon={<EditIcon />} />
                  </>
                ) : null
              }
            ></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
