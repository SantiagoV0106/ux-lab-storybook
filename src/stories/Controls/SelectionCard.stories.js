import { SelectionCard } from "../../components/Controls/SelectionCard";

export default {
  title: "components/Controls/Selection Card",
  component: SelectionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the card",
    },
    caption: {
      control: "text",
      description: "Caption below the title",
    },
    checkboxState: {
      control: "radio",
      options: ["enabled", "hovered", "selected"],
      description: "State of the checkbox",
    },
    state: {
      control: "radio",
      options: ["enabled", "disabled", "selected"],
      description: "State of the card",
    },
    captionSubstate: {
      control: "radio",
      options: ["uncompleted", "progress", "completed"],
      description:
        'Sub-state of the caption when the card is enabled. This only works when the state is "enabled".',
    },
    iconName: {
      control: {
        type: "select",
        labels: ["add", "arrowRight", "shop"],
      },
    },
  },
};

export const Enabled = {
  args: {
    title: "Nombre Empresa",
    caption: "Estado",
    state: "enabled",
    captionSubstate: "uncompleted",
    checkboxState: "enabled",
    iconName: "shop",
  },
};
export const Selected = {
  args: {
    title: "Nombre Empresa",
    caption: "Estado",
    state: "Selected",
    captionSubstate: "uncompleted",
    checkboxState: "enabled",
    iconName: "shop",
  },
};
export const Disabled = {
  args: {
    title: "Nombre Empresa",
    caption: "Estado",
    state: "disabled",
    captionSubstate: "uncompleted",
    checkboxState: "enabled",
    iconName: "shop",
  },
};
