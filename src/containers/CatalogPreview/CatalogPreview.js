import React from "react";
import {
  CatalogPreviewContainer,
  CatalogPreviewContent,
  GemstonesPreview,
} from "./CatalogPreview.styled";
import GemstonePreviewItem from "../../components/GemstonePreviewItem/GemstonePreviewItem";
import SapphirePreviewImage from "../../icons/sapphire_preview.png";
import RubyPreviewImage from "../../icons/ruby_preview.png";
import OpalPreviewImage from "../../icons/opal_preview.png";
import { ButtonPB } from "../../components/ButtonPurpleBlue/ButtonPurpleBlue.styled";
const CatalogPreview = () => {
  return (
    <CatalogPreviewContainer>
      <CatalogPreviewContent>
        <GemstonesPreview>
          <GemstonePreviewItem
            title={"Ruby"}
            description={"Lorem ipsum dolor sit amet consectetur"}
            priceFrom={800}
            image={RubyPreviewImage}
          />
          <GemstonePreviewItem
            title={"Sapphire"}
            description={"Lorem ipsum dolor sit amet consectetur"}
            priceFrom={600}
            image={SapphirePreviewImage}
          />
          <GemstonePreviewItem
            title={"Opal"}
            description={"Lorem ipsum dolor sit amet consectetur"}
            priceFrom={400}
            image={OpalPreviewImage}
          />
        </GemstonesPreview>
        <ButtonPB href="/catalog">Show all gemstones</ButtonPB>
      </CatalogPreviewContent>
    </CatalogPreviewContainer>
  );
};

export default CatalogPreview;
