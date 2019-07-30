import mediaQueries from "styled-components-mq";
import colors from "./colors";
import utils from "./utils";
import sizes from "./sizes";
import buttons from "./buttons";

const mq = mediaQueries({
  xs: "0px",
  sm: "544px",
  md: "769px",
  lg: "992px",
  xl: "1024px",
  xxl: "1440px",
  xxxl: "2560px"
});

export default {
  colors,
  mq,
  utils,
  sizes,
  buttons,
  lineHeight: sizes.lineHeight
};
