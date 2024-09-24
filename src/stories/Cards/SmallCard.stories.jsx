import { SmallCard } from "../../components/Cards/SmallCard/SmallCard";

export default {
    title: "components/Cards/Small Card",
    component: SmallCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        showDocsIcon: { control: { type: 'boolean' } },
        showCloseIcon: { control: { type: 'boolean' } }
    },
}


const Template = (args) => <SmallCard {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Precio descuento',
    showDocsIcon: true,
    showCloseIcon: true
}