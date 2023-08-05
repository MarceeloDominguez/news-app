import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CONTAINER_ITEM_SIZE = width * 0.92;

const IMAGE_SIZE = width * 0.89;

export const SIZE_IMAGE_CAROUSEL = {
  CONTAINER_ITEM_SIZE,
  SPACER_ITEM_SIZE: (width - CONTAINER_ITEM_SIZE) / 2,
  IMAGE_SIZE,
};

export const THEME = {
  primary: "#F4F2DE",
};
