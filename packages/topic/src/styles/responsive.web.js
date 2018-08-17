import { View } from "react-native";
import styled from "styled-components";
import {
  breakpoints,
  colours,
  fonts,
  fontSizes,
  spacing
} from "@times-components/styleguide";

export const getHeadContainer = ({ hasDescription }) => styled(View)`
  width: 100%;
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};
  padding-bottom: ${hasDescription ? spacing(4) : 0};

  @media (min-width: ${breakpoints.medium}px) {
    padding-left: 0;
    padding-right: 0;
    max-width: 80.8%;
    padding-top: ${hasDescription ? spacing(1) : spacing(6)};
    padding-bottom: ${hasDescription ? spacing(7) : spacing(2)};
  }

  @media (min-width: ${breakpoints.wide}px) {
    max-width: 56.2%;
    padding-top: ${hasDescription ? spacing(3) : spacing(10)};
    padding-bottom: ${hasDescription ? spacing(8) : spacing(3)};
  }
`;

export const ResponsiveName = styled.h1`
  font-family: "${fonts.headline}";
  font-size: ${fontSizes.pageHeadline}px;
  color: ${colours.functional.brandColour};
  padding-bottom: ${spacing(4)};
  text-align: center;

  @media (min-width: ${breakpoints.medium}px) {
    font-size: ${fontSizes.pageHeadlineLarge}px;
  }
`;

export const ResponsiveDivider = styled(View)`
  border-top-color: ${colours.functional.keyline};
  border-top-style: solid;
  border-top-width: 1px;
  margin: 0 auto ${spacing(5)} auto;
  width: 200px;

  @media (min-width: ${breakpoints.medium}px) {
    width: 290px;
  }
`;
