import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CampaignForm from "../components/campaignForm/CampaignForm";
import CampaignList from "../components/campaignList/CamapaignList";

const DMPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  const handleSaveCampaign = (newCampaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
  };

  return (
    <Container style={{ height: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Dungeon Master Panel
      </Typography>
      <Box sx={{ mb: 4 }}>
        <CampaignForm onSave={handleSaveCampaign} />
      </Box>
      {/* <CampaignList campaigns={campaigns} /> */}
    </Container>
  );
};

export default DMPage;
