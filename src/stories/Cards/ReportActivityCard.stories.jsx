import { ReportActivityCard } from "../../components/Cards/ReportActivityCard/ReportActivityCard";
import { userEvent, within } from '@storybook/test';

export default {
    title: "components/Cards/Report Activity Card",
    component: ReportActivityCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        options: { control: { type: 'array' } }
    },
};

export const Default = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3']
    },
};

export const TestingCard = {
    args: {
        options: ['comer', 'bailar', 'dormir']
    },
    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);
   
        await userEvent.click(canvas.getByText('Seleccione un tipo de novedad'));

        await userEvent.click(canvas.getByText('bailar'));

        await userEvent.type(canvas.getByTestId('text-area'), 'Hollaaaaaa');

        await userEvent.click(canvas.getByRole('button'));

    },
  };

