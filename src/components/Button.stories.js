import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import AddIcon from '../../public/assets/icons/Add.svg'

export default {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    appearance: {
      control: "radio",
      options: ["filled", "outline"],
    },
    state: {
      control: "radio",
      options: ["enabled", "hovered", "disabled", "clicked", "focused"],
    },
    iconLeft: { control: "boolean" },
    iconRight: { control: "boolean" },
    leftIcon: { control: "none" },
    rightIcon: { control: "none" },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: action('button-click'),
  },
};

export const Primary = {
  args: {
    type: "primary",
    appearance: "filled",
    state: "enabled",
    iconLeft: true,
    leftIcon: AddIcon,
    iconRight: true,
    rightIcon: AddIcon,
    children: "Button Text",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    appearance: "filled",
    state: "enabled",
    children: "Button",
  },
};
