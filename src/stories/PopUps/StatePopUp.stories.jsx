import { StatePopUp } from '../../components/PopUps/StatePopUp';

export default {
  title: 'Components/PopUps/StatePopUp',
  component: StatePopUp,
};

const Template = (args) => <StatePopUp {...args} />;

export const Default = Template.bind({});
Default.args = {
    state: 'Completado',
    title: 'Title',
    subtitle: 'Subtitle',
    execution: '1/3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};




