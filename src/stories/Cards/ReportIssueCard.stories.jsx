import { ReportIssueCard } from "../../components/Cards/ReportIssueCard/ReportIssueCard";
import { userEvent, within, expect } from '@storybook/test';

export default {
    title: "components/Cards/Report Issue Card",
    component: ReportIssueCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disable: { control: { type: 'boolean' } }
    },
};

export const Default = {
    args: {
        disable: false,
        state: 'selected'
    },
};
export const Disable = {
    args: {
        disable: true
    },
};


export const TestingCard = {
    args: {
      initialState: "enabled"
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      // Haz clic en el checkbox para cambiar su estado
      await userEvent.click(canvas.getByTestId("checkbox"));
  
      // Verifica que el checkbox tiene la clase "checked" y el estado "selected"
      const checkboxElement = canvas.getByTestId("checkbox");
      expect(checkboxElement).toHaveClass("checked");
      expect(checkboxElement).toHaveClass("selected"); // Ajusta la clase según tu implementación
    },
  };
  