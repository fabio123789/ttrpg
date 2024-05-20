import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import CustomButton from "../button/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#FDF3E7",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
}));

const CardButtons = styled(Card)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  boxShadow: "none",
  background: "none",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: "bold",
}));

const CardContentText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
}));

const MyCard = ({ title, content }) => (
  <CustomCard>
    <CardButtons>
      <CustomButton tooltip="edit" variant="icon">
        <EditIcon />
      </CustomButton>
      <CustomButton tooltip="delete" variant="icon">
        <DeleteIcon />
      </CustomButton>
    </CardButtons>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardContentText>{content}</CardContentText>
    </CardContent>
  </CustomCard>
);

export default MyCard;
