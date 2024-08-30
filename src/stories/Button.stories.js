import { action } from "@storybook/addon-actions";
import { Button } from "../components/Button";

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
    iconSrc: {
      control: {
        type: "select",
        labels: ["add", "arrowRight"] /* Here we´re gonna add all the avaible icons for the button */
      }
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"]
    },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: action("button-click"),
  },
};

export const Primary = {
  args: {
    type: "primary",
    appearance: "filled",
    state: "enabled",
    iconSrc: "add",
    iconPosition: "left",
    children: "Button Text",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    appearance: "filled",
    state: "enabled",
    iconSrc: "add",
    iconPosition: "left", 
    children: "Button Text",
  },
};
