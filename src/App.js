import React from "react";
import SignIn from "./routes/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/dashboard/Dashboard";
import Campaign from "./routes/campaign/Campaign";

const user = {
  id: "ddddd",
  name: "Alice",
  role: "DM", // or 'Player'
};

const campaigns = [
  {
    title: "Campaign 1",
    description: "This is the first campaign.",
    id: "1",
    createdAt: new Date().toDateString(),
  },
  {
    title: "Campaign 2",
    description: "This is the second campaign.",
    id: "2",
    createdAt: new Date().toDateString(),
  },
  {
    title: "Campaign 3",
    description: "This is the first campaign.",
    id: "3",
    createdAt: new Date().toDateString(),
  },
  {
    title: "Campaign 4",
    description: "This is the second campaign.",
    id: "2",
    createdAt: new Date().toDateString(),
  },
  {
    title: "Campaign 5",
    description: "This is the first campaign.",
    id: "1",
    createdAt: new Date().toDateString(),
  },
  {
    title: "Campaign 6",
    description: "This is the second campaign.",
    id: "2",
    createdAt: new Date().toDateString(),
  },
];

const campaignData = {
  characters: [
    { name: "Aragorn", description: "A ranger from the north." },
    { name: "Legolas", description: "An elven prince and master archer." },
  ],
  items: [
    {
      name: "Andúril",
      description: "Flame of the West, reforged from the shards of Narsil.",
    },
    {
      name: "Bow of Galadriel",
      description: "A gift from the Lady of Lothlórien.",
    },
  ],
  abilities: [
    { name: "Stealth", description: "Move silently and unseen." },
    { name: "Archery", description: "Mastery in using a bow and arrow." },
  ],
  locations: [
    { name: "Rivendell", description: "The house of Elrond." },
    {
      name: "Mordor",
      description: "The land of shadows and the stronghold of Sauron.",
    },
  ],
  notes: [
    {
      title: "Meeting at Rivendell",
      content: "Discuss the formation of the fellowship.",
    },
    {
      title: "Journey to Mordor",
      content: "Plan the route and gather supplies.",
    },
  ],
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/"
          element={<Dashboard user={user} campaigns={campaigns} />}
        />
        <Route
          path="/campaign/:id"
          element={<Campaign campaignData={campaignData} user={user} />}
        />
        <Route
          path="/character/:id"
          element={<Campaign campaignData={campaignData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
