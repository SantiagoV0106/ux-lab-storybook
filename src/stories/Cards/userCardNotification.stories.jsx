import { UserCardNotification } from "../../components/Cards/UserCardNotificacion/UserCardNotificacion"

export default {
    title: "components/Cards/User Notification Card",
    component: UserCardNotification,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        body: { control: 'text', description: 'Contenido de la tarjeta' },
        caption: { control: 'text', description: 'caption de la tarjeta' },
    }
}

export const Default = {
    args: {
        title: '¡Nuevo equipo en tu portafolio!',
        body: 'Échale un vistazo al nuevo Motorola G20',
        caption: 'Hace unos segundos',
    }
}