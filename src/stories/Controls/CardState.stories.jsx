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
      control: false,
      description: "Icon to display on the card (fixed to checkIcon)",
    },
    showIcon: {
      control: "boolean", 
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

export const Completed = {
  args: {
    text: "Task Completed",
    iconName: "checkIcon", 
    showIcon: true, 
    state: "completed",
  },
};

export const InProgress = {
  args: {
    text: "Task In Progress",
    iconName: "checkIcon", 
    showIcon: true, 
    state: "inProgress", 
  },
};

export const NotCompleted = {
  args: {
    text: "Task Not Completed",
    iconName: "checkIcon", 
    showIcon: true, 
    state: "notCompleted", 
  },
};
