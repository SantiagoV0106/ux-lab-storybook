import { FilterOptions } from '../../components/PopUps/FilterOptions';

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




