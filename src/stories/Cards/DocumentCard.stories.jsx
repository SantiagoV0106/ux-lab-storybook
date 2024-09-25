import { DocumentCard } from "../../components/Cards/DocumentCard/DocumentCard"

export default {
    title: "components/Cards/Document Card",
    component: DocumentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        caption: { control: 'text', description: 'Caption' },
        body: { control: 'text', description: 'Contenido de la tarjeta' },
    },
}

const Template = (args) => <DocumentCard {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Nuevo reglamento interno',
    caption: '24 junio, 2021',
    body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ultricies blandit...'
}