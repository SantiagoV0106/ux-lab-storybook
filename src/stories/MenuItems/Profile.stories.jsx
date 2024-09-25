import { Profile } from '../../components/MenuItems/Profile';
import catImg from '../../assets/cat-image.png'

export default {
  title: 'Components/MenuItems/Profile',
  component: Profile,
  parameters: {
    layout: "centered",
},
  tags: ["autodocs"],
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Flow Cat',
    points: "120",
    image: catImg,
};




