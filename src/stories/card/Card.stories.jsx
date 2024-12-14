import Card from "./Card";
import { options } from "./constants";

export default {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Card {...args} />;

export const StepsCard = Template.bind({});
StepsCard.args = {
  title: "Card Title",
  image: "https://picsum.photos/200/200",
  subtitle: "Card Subtitle",
  headingIcon: "https://picsum.photos/200/200",
  backgroundColor: "#D8D5FB",
  borderRadius: "4px",
  padding: "16px",
  borderColor: "#000000",
  glassEffect: false,
};

export const GlassEffect = Template.bind({});
GlassEffect.args = {
  ...GlassEffect.args,
  glassEffect: true,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

export const Colors = Template.bind({});
Colors.args = {
  ...Colors.args,
  color: "primary",
  // addd a square image
  backgroundColor: options.backgroundColor[0],
  borderColor: options.borderColor[0],
};

export const Sizes = Template.bind({});
Sizes.args = {
  ...Sizes.args,
  size: options.sizes[1],
};

export const FontFamily = Template.bind({});
FontFamily.args = {
  ...Sizes.args,
  fontFamily: options.fontFamily[0],
  fontWeight: options.fontWeight[0],
  fontSize: options.fontSize[0],
  backgroundColor: options.backgroundColor[0],
  borderColor: options.borderColor[0],
};
