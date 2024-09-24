import { ActionCard } from "../../components/Cards/ActionCard/ActionCard"

export default {
    title: "components/Cards/Action Card",
    component: ActionCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        body: { control: 'text', description: 'Contenido de la tarjeta' },
    },
}

const Template = (args) => <ActionCard {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Plataforma de mercadeo',
    body : 'Actividades en punto de venta, gestión de momentos, planes comerciales, reporte de precios, inventarios y agotados.'
}