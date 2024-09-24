import { ReportCard } from "../../components/Cards/ReportCard/ReportCard";

export default {
    title: "components/Cards/Report Card",
    component: ReportCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        caption: { control: 'text', description: 'Caption' },
        info1: { control: { type: 'number', min: 0, max: 99, step: 1 } },
        info2: { control: { type: 'number', min: 0, max: 99, step: 1 } },
        info3: { control: { type: 'number', min: 0, max: 99, step: 1 } },
        showIconInfo1: { control: { type: 'boolean' } },
        showIconInfo2: { control: { type: 'boolean' } },
        showIconInfo3: { control: { type: 'boolean' } },
        showArrow: { control: { type: 'boolean' } }
    },
}

const Template = (args) => <ReportCard {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Reporte de agotados',
    caption: '8:15 AM',
    info1: 50,
    info2: 2,
    info3: 4,
    showIconInfo1: true,
    showIconInfo2: true,
    showIconInfo3: true,
    showArrow: true,
}