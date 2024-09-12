import { MenuButton } from '../../components/MenuItems/MenuButton';

export default {
  title: 'Components/MenuItems/MenuButton',
  component: MenuButton,
};

const Template = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Inicio',
    selected: false,
    iconName: 'inicio',
    onClick: () => console.log('Selected clicked') 
};




