import {BienvenidaUsuarios} from '../../components/Cards/BienvenidaUsuario/BienvenidaUsuario'

export default {
    title: "components/Cards/Bienvenida Usuarios",
    component: BienvenidaUsuarios,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        caption: { control: 'text', description: 'Caption' },
        body: { control: 'text', description: 'Cuerpo de la tarjeta' },
        showBanner: { control: { type: 'boolean' } },
        showProfile: { control: { type: 'boolean' } }
    },
}

const Template = (args) => <BienvenidaUsuarios {...args} />

export const Default = Template.bind({})

Default.args = {
    title :'¡Ha llegado Diana Lora, bienvenida!',
    caption : 'Hace una hora',
    body : 'Se une a trade marketing Cali, le damos la bienvenida a este equipo de alto rendimiento.',
    showBanner : true,
    showProfile : true
}
export const NoBanner = Template.bind({})

NoBanner.args = {
    title :'¡Ha llegado Diana Lora, bienvenida!',
    caption : 'Hace una hora',
    body : 'Se une a trade marketing Cali, le damos la bienvenida a este equipo de alto rendimiento.',
    showBanner : false,
    showProfile : true
}