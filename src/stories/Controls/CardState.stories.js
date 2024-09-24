import { CardState } from "../../components/Controls/CardState";

export default {
  title: "Components/Controls/CardState",
  component: CardState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Text to display",
    },
    iconName: {
      control: false, // Deshabilitamos el control para iconName
      description: "Icon to display on the card (fixed to checkIcon)",
    },
    showIcon: {
      control: "boolean", // Agregamos control para showIcon
      description: "Toggle to show or hide the icon",
    },
    state: {
      control: {
        type: "select",
        options: ["completed", "inProgress", "notCompleted"],
      },
      description: "State of the card that controls background color of the icon",
    },
  },
};

export const Default = {
  args: {
    text: "Task Description",
    iconName: "checkIcon",
    showIcon: true,
  },
};

export const WithoutIcon = {
  args: {
    text: "Task Description",
    iconName: "checkIcon", 
    showIcon: false, 
  },
};
