import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      sidebar: string;
      text: string;
      body: string;
      selected: string;
    };
  }
}
