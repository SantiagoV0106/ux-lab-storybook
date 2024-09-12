import { Report } from '../../components/PopUps/Report';

export default {
  title: 'Components/PopUps/Report',
  component: Report,
};

const Template = (args) => <Report {...args} />;

export const Default = Template.bind({});
Default.args = {
    step: '1',
};




