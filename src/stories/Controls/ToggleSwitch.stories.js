import { ToggleSwitch } from "../../components/Controls/ToggleSwitch";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Controls/Toggle Switch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onToggle: action("toggle-switch"),
  },
};

export const On = {
  args: {
    isOn: true,
  },
};

export const Off = {
  args: {
    isOn: false,
  },
};
