import { Tarjeta } from "../../components/Cards/Tarjeta/Tarjeta";

export default {
    title: "components/Cards/Tarjeta",
    component: Tarjeta,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        cardTitle: { control: 'text', description: 'Titulo de la tarjeta' },
        caption: { control: 'text', description: 'Caption' },
        title: { control: 'text', description: 'Titulo del contenido' },
        subTitle: { control: 'text', description: 'Subtitulo del contenido' },
        body: { control: 'text', description: 'Cuerpo de la tarjeta' },
        open: { control: { type: 'boolean' } },
        showCaption: { control: { type: 'boolean' } },
        showArrow: { control: { type: 'boolean' } }
    },
}

const Template = (args) => <Tarjeta {...args} />

export const Close = Template.bind({})

Close.args = {
    cardTitle: 'Verificación de limpieza en góndola',
    caption: 'Única ejecución',
    title: 'Detalle',
    subTitle: 'Visita comercial completa',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Arcu blandit diam amet, ac commodo blandit facilisis.
        Tincidunt ultricies congue cras habitasse sem eu.
        Ut rutrum non malesuada est. Augue egestas vestibulum dolor,
        lectus mauris, odio ut.`,
    showArrow: true,
    showCaption: true,
    open: false,
}
export const Open = Template.bind({})

Open.args = {
    cardTitle: 'Verificación de limpieza en góndola',
    caption: 'Única ejecución',
    title: 'Detalle',
    subTitle: 'Visita comercial completa',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Arcu blandit diam amet, ac commodo blandit facilisis.
        Tincidunt ultricies congue cras habitasse sem eu.
        Ut rutrum non malesuada est. Augue egestas vestibulum dolor,
        lectus mauris, odio ut.`,
    showArrow: true,
    open: true,
    showCaption: true,

}