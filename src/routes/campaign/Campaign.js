import React, { useState } from "react";
import { Typography, Grid, styled } from "@mui/material";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Popup from "../../components/popup/Popup";
import Input from "../../components/input/Input";

const Campaign = ({ campaignData = {}, user = {} }) => {
  const {
    characters = [{}],
    items = [{}],
    abilities = [{}],
    locations = [{}],
    notes = [{}],
  } = campaignData;

  const { role = "" } = user;

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Campaign Details</Typography>

      <Section title="Characters" items={characters} />
      {role === "DM" ? <Section title="Items" items={items} /> : null}
      {role === "DM" ? <Section title="Abilities" items={abilities} /> : null}
      <Section title="Locations" items={locations} />
      <Section title="Notes" items={notes} />
    </div>
  );
};

const PopupContent = styled("div")(() => ({
  display: "flex",
  padding: "10px 0px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Section = ({ title, items, showActions = true }) => {
  const [popupObject, setPopupObject] = useState({
    isEdit: false,
    openPopup: false,
  });

  const handleEditButton = ({ title, id }) => {
    switch (title) {
        case "Characters":
          break;
        case "Items":
        break;
      case "Abilities":
        break;
      default:
        setPopupObject({ isEdit: true, openPopup: true });
        break;
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5">{title}</Typography>
        <Button
          onClick={() => setPopupObject({ isEdit: false, openPopup: true })}
          startIcon={<AddIcon />}
          style={{ marginLeft: "5px" }}
        >
          New {title}
        </Button>
      </div>
      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              action={
                showActions ? (
                  <>
                    <Button
                      tooltip="Delete"
                      icon={<DeleteIcon color="error" />}
                    />
                    <Button
                      onClick={handleEditButton}
                      tooltip="Edit"
                      icon={<EditIcon />}
                    />
                  </>
                ) : null
              }
              title={item.name || item.title}
              description={item.description || item.content}
            ></Card>
          </Grid>
        ))}
      </Grid>
      <CampaignPopup
        openPopup={popupObject.openPopup}
        handleClose={() => setPopupObject({ isEdit: false, openPopup: false })}
        isEdit={true}
        title={title}
      />
    </div>
  );
};

const CampaignPopup = ({ handleClose, title, openPopup, isEdit }) => {
  return (
    <Popup
      title={title}
      actionText={isEdit ? "Edit" : "Create"}
      handleClose={handleClose}
      open={openPopup}
    >
      <PopupContent>
        <Input
          style={{ marginBottom: "20px" }}
          required
          fullWidth
          label="title"
        />
        <Input multiline fullWidth required label="description" />
      </PopupContent>
    </Popup>
  );
};

export default Campaign;
