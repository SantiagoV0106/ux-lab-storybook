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
  
      // Verifica el valor inicial del slider
      expect(slider.value).toBe('1');
  
      // Simula el cambio del slider a 3
      await userEvent.click(slider, { clientX: slider.getBoundingClientRect().x + 60 }); // Ajusta para mover el slider
      expect(slider.value).toBe('3');
    },
  };