import { action } from "@storybook/addon-actions";
import { Button } from "../../components/Buttons/Button";
import { userEvent, within, expect } from '@storybook/test';

export default {
  title: "components/Buttons/Button",
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
        labels: ["add", "arrowRight, shop"] /* Here we´re gonna add all the avaible icons for the button */
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


// Definición del botón de prueba
export const TestingButton = {
  args: {
    type: "primary",
    appearance: "filled",
    state: "enabled",
    iconSrc: "add",
    iconPosition: "left",
    children: "Button Text",
    onClick: action("button-click"), // Asigna la acción aquí
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // const handler = action("button-click"); // Crea un spy para la acción

    // Simula el clic en el botón
    await userEvent.click(canvas.getByRole('button'));

    // // Verifica que la acción "button-click" fue llamada
    // expect(handler).toHaveBeenCalled(); // Verifica el spy
  },
};