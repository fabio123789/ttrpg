import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const CampaignList = ({ campaigns }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Existing Campaigns
      </Typography>
      <List>
        {campaigns.map((campaign, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={campaign.name}
              secondary={campaign.description}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CampaignList;
