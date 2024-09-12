import { MenuBar } from '../../components/MenuItems/MenuBar';
export default {
  title: 'Components/MenuItems/MenuBar',
  component: MenuBar,
};

const Template = (args) => <MenuBar {...args} />;


export const Default = Template.bind({});
Default.args = {
  buttons: [
    {
      label: "Inicio",
      selected: false,
      iconName: 'inicio',
      onClick: () => {}
    },
    {
      label: "Agenda",
      selected: false,
      iconName: 'agenda',
      onClick: () => {}
    },{
      label: "Gestión",
      selected: false,
      iconName: 'gestion',
      onClick: () => {}
    },{
      label: "Portafolio",
      selected: false,
      iconName: 'portafolio',
      onClick: () => {}
    },{
      label: "Perfil",
      selected: false,
      iconName: 'perfil',
      onClick: () => {}
    },
  ],
};