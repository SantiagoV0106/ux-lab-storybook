import { Report } from '../../components/PopUps/Report';

export default {
  title: 'Components/PopUps/Report',
  component: Report,
  parameters: {
    layout: "centered",
},
  tags: ["autodocs"],
};

const Template = (args) => <Report {...args} />;

export const Default = Template.bind({});
Default.args = {
    step: '1',
};




