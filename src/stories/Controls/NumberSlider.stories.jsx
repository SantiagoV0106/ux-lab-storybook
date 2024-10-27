import { NumberSlider } from "../../components/Controls/NumberSlider"; // Asegúrate de que la ruta sea correcta

export default {
  title: "Components/Controls/NumberSlider",
  component: NumberSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], 
  argTypes: {
    currentPage: {
      control: {
        type: "range",
        min: 1,
        max: 5,
        step: 1,
      },
      description: "Página actual seleccionada",
    },
  },
};

export const Page1 = {
  args: {
    currentPage: 1,
  },
};
export const Page2 = {
  args: {
    currentPage: 2,
  },
};
export const Page3 = {
  args: {
    currentPage: 3,
  },
};
export const Page4 = {
  args: {
    currentPage: 4,
  },
};
export const Page5 = {
  args: {
    currentPage: 5,
  },
};
