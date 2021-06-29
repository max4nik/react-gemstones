import React from "react";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroH1,
  HeroButtonWrapper,
  HeroP,
  HeroContent,
} from "./Hero.styled";
import Video from "../../videos/video_hero.mp4";
import { ButtonPB } from "../../components/ButtonPurpleBlue/ButtonPurpleBlue.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Online gemstones shopping is real!</HeroH1>
        <HeroP>
          Gemstones brighten our world with their beauty, captivating colors,
          cultural importance, rarity and unique origins. Whether you’re
          beginning to discover gemstones or creating your own jewelry, GemsS
          has an extensive assortment of extraordinary gemstones for any type of
          collection.
        </HeroP>
        <HeroButtonWrapper>
          <ButtonPB to="/catalog" style={{ marginTop: "5.5rem" }}>
            Go buy now!
          </ButtonPB>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
