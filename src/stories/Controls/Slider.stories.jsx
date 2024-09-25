import { StepSlider } from "../../components/Controls/Slider";

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