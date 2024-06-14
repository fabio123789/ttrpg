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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme, styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

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
          onChange={(e) => onChange(index, "value", e.target.value)}
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

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const CampaignForm = ({ onSave }) => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [defaultCombatStats, setDefaultCombatStats] = useState([
    { name: "", value: "" },
  ]);
  const [defaultSocialStats, setDefaultSocialStats] = useState([
    { name: "", value: "" },
  ]);
  const [combatEnabled, setCombatEnabled] = useState(true);
  const [socialEnabled, setSocialEnabled] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSave = () => {
    if (!campaignName.trim() || !campaignDescription.trim()) {
      return;
    }
    onSave({
      name: campaignName,
      description: campaignDescription,
      combatStats: defaultCombatStats,
      socialStats: defaultSocialStats,
      combatEnabled,
      socialEnabled,
    });
    setShowSuccess(true);
    setCampaignName("");
    setCampaignDescription("");
    setDefaultCombatStats([{ name: "", value: "" }]);
    setDefaultSocialStats([{ name: "", value: "" }]);
    setCombatEnabled(true);
    setSocialEnabled(true);
  };

  const handleStatChange = (setStats) => (index, field, value) => {
    setStats((prevStats) => {
      const newStats = [...prevStats];
      newStats[index][field] = value;
      return newStats;
    });
  };

  const addStat = (setStats) => () => {
    setStats((prevStats) => [...prevStats, { name: "", value: "" }]);
  };

  const removeStat = (setStats) => (index) => {
    setStats((prevStats) => prevStats.filter((_, i) => i !== index));
  };

  return (
    <StyledBox>
      <Typography variant="h6" gutterBottom>
        Create a New Campaign
      </Typography>
      <TextField
        label="Campaign Name"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Campaign Description"
        value={campaignDescription}
        onChange={(e) => setCampaignDescription(e.target.value)}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={isSmallScreen ? 0 : 2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                checked={combatEnabled}
                onChange={(e) => setCombatEnabled(e.target.checked)}
              />
            }
            label="Enable Combat"
          />
          {combatEnabled && (
            <StatFields
              stats={defaultCombatStats}
              onAdd={addStat(setDefaultCombatStats)}
              onRemove={removeStat(setDefaultCombatStats)}
              onChange={handleStatChange(setDefaultCombatStats)}
              label="Combat"
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                checked={socialEnabled}
                onChange={(e) => setSocialEnabled(e.target.checked)}
              />
            }
            label="Enable Social"
          />
          {socialEnabled && (
            <StatFields
              stats={defaultSocialStats}
              onAdd={addStat(setDefaultSocialStats)}
              onRemove={removeStat(setDefaultSocialStats)}
              onChange={handleStatChange(setDefaultSocialStats)}
              label="Social"
            />
          )}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ mb: 2 }}
      >
        Save Campaign
      </Button>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Campaign saved successfully!
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};

export default CampaignForm;
