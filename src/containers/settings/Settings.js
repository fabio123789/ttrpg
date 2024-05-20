import React, { useState } from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios"; // For sending data to the server
import { Grid } from "@mui/material";
import CustomTextField from "../../components/textField/TextField";
import CustomAccordion from "../../components/accordion/Accordion";
import CustomButton from "../../components/button/Button";
import DeleteIcon from '@mui/icons-material/Delete'
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const SettingsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  backgroundColor: "#2C3E50",
  color: "#FDF3E7",
  height: "100vh",
  boxSizing: "border-box",
}));

const Settings = () => {
  const [defaultSettings, setDefaultSettings] = useState([
    {
      name: "Combat",
      defaults: [
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
      ],
    },
    {
      name: "Social",
      defaults: [
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
        {
          name: "test1",
          value: 0,
        },
      ],
    },
  ]);
  const navigate = useNavigate();

  const handleSave = () => {
    axios.post("/api/settings", {}).then((response) => {
      console.log("Settings saved:", response.data);
    });
  };

  function handleRemovePoint(parentKey, key) {
    const newDefaultSettings = [...defaultSettings];
    newDefaultSettings[parentKey].defaults.splice(key, 1);
    return setDefaultSettings(newDefaultSettings);
  }

  function handleAddNewPoint(parentKey) {
    const newDefaultSettings = [...defaultSettings];
    newDefaultSettings[parentKey].defaults.push({ name: "", value: "" });
    return setDefaultSettings(newDefaultSettings);
  }

  return (
    <SettingsContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Grid
        style={{ overflow: "auto", margin: "0px", width: "100%" }}
        container
        spacing={3}
      >
        {defaultSettings.map((defaultSetting, parentKey) => {
          return (
            <Grid key={parentKey} item xs={12} sm={12} md={12}>
              <CustomAccordion summary={defaultSetting.name + " Points"}>
                {defaultSetting.defaults.map((defaultItem, key) => {
                  return (
                    <div key={key} style={{ display: "flex", alignItems: 'baseline' }}>
                      <CustomTextField
                        required
                        fullWidth
                        id="lifePoints"
                        label="name"
                        type="text"
                        value={defaultItem.name}
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <CustomTextField
                        required
                        fullWidth
                        id="lifePoints"
                        label="value"
                        type="number"
                        value={defaultItem.value}
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <CustomButton variant='icon' onClick={() => handleRemovePoint(parentKey, key)}>
                        <DeleteIcon style={{color: 'white'}} />
                      </CustomButton>
                    </div>
                  );
                })}
                <CustomButton
                  variant="primary"
                  onClick={() => handleAddNewPoint(parentKey)}
                >
                  Add new {defaultSetting.name} Point
                </CustomButton>
              </CustomAccordion>
            </Grid>
          );
        })}
      </Grid>
      <CustomButton variant="primary" onClick={handleSave}>
        Save
      </CustomButton>
      <CustomButton onClick={() => navigate('/')} tooltip='Leave' style={{position: 'absolute', top: '10px', right: '10px'}} variant='icon'>
        <LogoutIcon style={{color: 'white'}} />
      </CustomButton>
    </SettingsContainer>
  );
};

export default Settings;
