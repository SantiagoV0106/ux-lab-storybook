import { Warning } from '../../components/PopUps/Warning';

export default {
  title: 'Components/PopUps/Warning',
  component: Warning,
  parameters: {
    layout: "centered",
},
  tags: ["autodocs"],
};

const Template = (args) => <Warning {...args} />;

export const Default = Template.bind({});
Default.args = {

};




