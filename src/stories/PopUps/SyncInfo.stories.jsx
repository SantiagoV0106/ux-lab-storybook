import { SyncInfo } from '../../components/PopUps/SyncInfo';

export default {
  title: 'Components/SyncInfo',
  component: SyncInfo,
};

const Template = (args) => <SyncInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    state: 'Completado',
};




