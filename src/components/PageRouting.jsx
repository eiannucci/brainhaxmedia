import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/pg-home";
import { HeroSearchPage } from '../pages/pg-superhero-search';
import { InsultGeneratorPage } from "../pages/pg-insult-generator";
import { SolarSearchPage } from "../pages/pg-solar-search";
import { MediaCardPage } from "../pages/pg-media-cards";
import { AnimationsPage } from "../pages/pg-animations";
import { AnimatedBannerPage } from "../pages/pg-html-banners";
import { MultiCubePage } from "../pages/pg-multicube";
import { CubeWavePage } from "../pages/pg-cubewave";
import { BandStatsPage } from "../pages/pg-customapi-bandstats";

export const PageRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pg-superhero-search" element={<HeroSearchPage />} />
      <Route path="/pg-insult-generator" element={<InsultGeneratorPage />} />
      <Route path="/pg-solar-search" element={<SolarSearchPage />} />
      <Route path="/pg-media-cards" element={<MediaCardPage />} />
      <Route path="/pg-animations" element={<AnimationsPage />} />
      <Route path="/pg-html-banners" element={<AnimatedBannerPage />} />
      <Route path="/pg-multicube" element={<MultiCubePage />} />
      <Route path="/pg-cubewave" element={<CubeWavePage />} />
      <Route path="/pg-customapi-bandstats" element={<BandStatsPage />} />

    </Routes>
  );
};