import { LinkButton } from "../components/LinkButton";

export default {
  title: "components/Link Button",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: 'radio',
      options: ["ingresar", "conocerMas"],
    },
    onClick: { action: 'clicked' },
  }
};

export const Ingresar = {
  args: {
    variant: 'ingresar',
  }
};

export const ConocerMas = {
  args: {
    variant: 'conocerMas',
  }
};
