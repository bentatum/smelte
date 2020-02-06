import { elevationOnHover } from "../../utils/smelter";

export let config = {
  props: {
    hover: true,
    elevation: 1,
    hoverElevation: 8
  },
  nodes: {
    root: {
      classes: {
        root: "rounded inline-flex flex-col overflow-hidden transition",
        hover: elevationOnHover
      }
    }
  }
};

export default config;