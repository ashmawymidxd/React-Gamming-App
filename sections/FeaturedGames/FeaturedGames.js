import React from "react";
import {
  SectionHeader,
  SectionWropper,
  FeaturedGamesCard,
} from "../../Components";

import "./FeaturedGames.css";

const FeaturedGames = () => {
  return (
      <SectionWropper>
        <SectionHeader>
          <am>Featured </am> Games
          <FeaturedGamesCard />
        </SectionHeader>
      </SectionWropper>
  );
};

export default FeaturedGames;
