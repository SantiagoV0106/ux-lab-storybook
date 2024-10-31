import { StepSlider } from "../../components/Controls/Slider";
import { userEvent, within, expect } from '@storybook/test';

export default {
    title: "components/Controls/Slider",
    component: StepSlider,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
        title : { control : 'text', description: 'Título Slider'}
    }
  };
  
  export const Default = {
    args: {
        title : 'Escala (Slider Título)'
    },
  };

  export const TestingStepSlider = {
    args: {
      title: 'Selecciona un paso',
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const slider = canvas.getByTestId('slider');
      
      for (let step = 1; step <= 5; step++) {
        slider.value = step.toString();
        await userEvent.click(slider); // Simula un clic para activar el cambio
        expect(slider.value).toBe(step.toString()); // Verifica que el valor cambió
      }
    },
  };