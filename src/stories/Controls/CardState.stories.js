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
      control: {
        type: "select",
        options: [
          "add",
          "arrowRight",
          "helpQuestion",
          "shop",
          "checkIcon",
          "arrowSimpleRight",
        ],
      },
      description: "Icon to display on the card",
    },
    state: {
      control: {
        type: "select",
        options: [
          "completed",
          "inProgress",
          "notCompleted",
        ],
      },
      description: "State of the card that controls background color of the icon",
    },
  },
};

export const Completed = {
  args: {
    text: "Task Completed",
    iconName: "checkIcon",
    state: "completed",
  },
};

export const InProgress = {
  args: {
    text: "Task In Progress",
    iconName: "checkIcon",
    state: "inProgress",
  },
};

export const NotCompleted = {
  args: {
    text: "Task Not Completed",
    iconName: "checkIcon",
    state: "notCompleted",
  },
};

