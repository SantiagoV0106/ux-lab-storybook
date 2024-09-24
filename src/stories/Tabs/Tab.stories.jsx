import { Tab } from "../../components/Tabs/Tab";

export default {
    title: "components/Tabs/Tab",
    component: Tab,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tab1Active: { control: { type: 'boolean' } },
        tab2Active: { control: { type: 'boolean' } },
        tab3Active: { control: { type: 'boolean' } },
        showLastTab: { control: { type: 'boolean' } }
    },
}

const Template = (args) => <Tab {...args} />

export const Default = Template.bind({});
Default.args = {
    tab1Active: true,
    tab2Active: false,
    tab3Active: false,
    showLastTab: true,
}

export const TwoSelectors = Template.bind({});
TwoSelectors.args = {
    tab1Active: true,
    tab2Active: false,
    tab3Active: false,
    showLastTab: false,
}