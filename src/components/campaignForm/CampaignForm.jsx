import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  Grid,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme, styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const defaultCampaignData = {
  campaignName: "",
  campaignDescription: "",
  defaultCombatStats: [{ name: "", value: "" }],
  defaultSocialStats: [{ name: "", value: "" }],
  combatEnabled: true,
  socialEnabled: true,
  health: { extra: 0, value: 0 },
  stamina: { extra: 0, value: 0 },
  trickPoints: { extra: 0, value: 0 },
  willpower: { extra: 0, value: 0 },
};

const StatFields = ({ stats, onAdd, onRemove, onChange, label }) => (
  <>
    {stats.map((stat, index) => (
      <Box key={index} sx={{ mb: 2 }}>
        <TextField
          label={`${label} Name`}
          value={stat.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          label={`${label} Value`}
          value={stat.value}
          onChange={(e) =>
            onChange(index, "value", e.target.value.replace(/\D/g, ""))
          }
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
        />
        <Tooltip title="Remove Stat">
          <IconButton onClick={() => onRemove(index)} color="secondary">
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ))}
    <Button
      variant="outlined"
      onClick={onAdd}
      startIcon={<AddIcon />}
      sx={{ mb: 2 }}
    >
      Add {label} Stat
    </Button>
  </>
);

const DerivedStatField = ({ label, value, onChange, options }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
    <TextField
      label={`${label} Base Value`}
      value={value.value}
      onChange={(e) => onChange("value", e.target.value.replace(/\D/g, ""))}
      variant="outlined"
      fullWidth
      sx={{ mb: 1 }}
    />
    <FormControl fullWidth sx={{ mb: 1 }}>
      <InputLabel>{label} Extra Value</InputLabel>
      <Select
        value={value.extra}
        onChange={(e) => onChange("extra", e.target.value)}
        label={`${label} Source`}
      >
        <MenuItem value="0">None</MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <TextField
      label={`${label} Total Value`}
      value={parseInt(value.value, 10) + parseInt(value.extra, 10)}
      variant="outlined"
      fullWidth
      inputProps={{ readOnly: true }}
      sx={{ mb: 1 }}
    />
  </Box>
);

const CampaignForm = ({ onSave }) => {
  const [campaignData, setCampaignData] = useState(defaultCampaignData);

  const [showSuccess, setShowSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const steps = [
    "Create a New Campaign",
    "Create Stats",
    "Create Derived Stats",
  ];

  const handleSave = () => {
    const { campaignName, campaignDescription } = campaignData;
    if (!campaignName.trim() || !campaignDescription.trim()) {
      return;
    }
    onSave(campaignData);
    setShowSuccess(true);
    resetForm();
  };

  const resetForm = () => {
    setCampaignData(defaultCampaignData);
  };

  const handleChange = (field, value) => {
    setCampaignData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleStatChange = (type) => (index, field, value) => {
    setCampaignData((prevData) => {
      const newStats = [...prevData[type]];
      newStats[index][field] =
        field === "value" ? value.replace(/\D/g, "") : value;
      return { ...prevData, [type]: newStats };
    });
  };

  const addStat = (type) => () => {
    setCampaignData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], { name: "", value: "" }],
    }));
  };

  const removeStat = (type) => (index) => {
    setCampaignData((prevData) => ({
      ...prevData,
      [type]: prevData[type].filter((_, i) => i !== index),
    }));
  };

  const handleDerivedStatChange = (field, value) => {
    setCampaignData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], ...value },
    }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? (
        <>
          <Typography sx={{ mt: 2 }} variant="h6" gutterBottom>
            Create a New Campaign
          </Typography>
          <TextField
            label="Campaign Name"
            value={campaignData.campaignName}
            onChange={(e) => handleChange("campaignName", e.target.value)}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Campaign Description"
            value={campaignData.campaignDescription}
            onChange={(e) =>
              handleChange("campaignDescription", e.target.value)
            }
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
        </>
      ) : activeStep === 1 ? (
        <Grid container spacing={isSmallScreen ? 0 : 2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={campaignData.combatEnabled}
                  onChange={(e) =>
                    handleChange("combatEnabled", e.target.checked)
                  }
                />
              }
              label="Enable Combat"
            />
            {campaignData.combatEnabled && (
              <StatFields
                stats={campaignData.defaultCombatStats}
                onAdd={addStat("defaultCombatStats")}
                onRemove={removeStat("defaultCombatStats")}
                onChange={handleStatChange("defaultCombatStats")}
                label="Combat"
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={campaignData.socialEnabled}
                  onChange={(e) =>
                    handleChange("socialEnabled", e.target.checked)
                  }
                />
              }
              label="Enable Social"
            />
            {campaignData.socialEnabled && (
              <StatFields
                stats={campaignData.defaultSocialStats}
                onAdd={addStat("defaultSocialStats")}
                onRemove={removeStat("defaultSocialStats")}
                onChange={handleStatChange("defaultSocialStats")}
                label="Social"
              />
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={isSmallScreen ? 0 : 2} sx={{ mt: 2 }}>
          {["health", "stamina", "trickPoints", "willpower"].map(
            (stat, key) => (
              <Grid key={key} item xs={12} sm={6}>
                <DerivedStatField
                  key={stat}
                  label={stat.charAt(0).toUpperCase() + stat.slice(1)}
                  value={campaignData[stat]}
                  onChange={(field, value) =>
                    handleDerivedStatChange(stat, { [field]: value })
                  }
                  options={campaignData.defaultCombatStats}
                />
              </Grid>
            )
          )}
        </Grid>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prev) => prev - 1)}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {activeStep < steps.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mb: 2 }}
          >
            Save Campaign
          </Button>
        )}
      </Box>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Campaign saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CampaignForm;
