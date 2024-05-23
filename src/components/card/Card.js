import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  Card as MUICard,
  Typography,
} from "@mui/material";
import React from "react";

const Card = ({ role, title, createdAt, description, action }) => {
  return (
    <MUICard sx={{maxWidth: '350px'}}>
      <CardHeader
        avatar={<Avatar aria-label="role">{role}</Avatar>}
        action={action}
        title={title}
        subheader={createdAt}
      />
      <CardMedia component="img" height="194" image="" alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
