import "styled-components";

import globalTheme from "../assets/styles/themes/globalTheme";

export type Theme = typeof globalTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}