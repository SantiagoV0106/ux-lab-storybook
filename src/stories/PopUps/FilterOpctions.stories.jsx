import { FilterOptions } from '../../components/PopUps/FilterOptions';
import { userEvent, within, expect } from '@storybook/test';


export default {
  title: 'Components/PopUps/FilterOptions',
  component: FilterOptions,
  parameters: {
    layout: "centered",
},
  tags: ["autodocs"],
};

const Template = (args) => <FilterOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'toggles'
};


export const TestingFilterOptions = {
  args: {
    type: 'toggles',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verifica el estado inicial de ambos toggles
    const toggle1 = canvas.getByTestId('toggle1');
    const toggle2 = canvas.getByTestId('toggle2');

    expect(toggle1.checked).toBe(false);
    expect(toggle2.checked).toBe(false);

    // Haz clic en el primer toggle
    await userEvent.click(toggle1);
    expect(toggle1.checked).toBe(true);
    expect(toggle2.checked).toBe(false);

    // Haz clic en el segundo toggle
    await userEvent.click(toggle2);
    expect(toggle1.checked).toBe(true);
    expect(toggle2.checked).toBe(true);

    // Haz clic nuevamente en el primer toggle
    await userEvent.click(toggle1);
    expect(toggle1.checked).toBe(false);
    expect(toggle2.checked).toBe(true);
  },
};