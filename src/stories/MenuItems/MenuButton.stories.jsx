import { MenuButton } from '../../components/MenuItems/MenuButton';

export default {
  title: 'Components/MenuItems/MenuButton',
  component: MenuButton,
  parameters: {
    layout: "centered",
},
  tags: ["autodocs"],
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Inicio',
    selected: false,
    iconName: 'inicio',
    onClick: () => console.log('Selected clicked') 
};




