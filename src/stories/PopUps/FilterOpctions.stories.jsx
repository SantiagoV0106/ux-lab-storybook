import { FilterOptions } from '../../components/PopUps/FilterOptions';

export default {
  title: 'Components/PopUps/FilterOptions',
  component: FilterOptions,
};

const Template = (args) => <FilterOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'toggles'
};




