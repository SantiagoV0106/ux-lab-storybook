import { ActivityCard } from "../../components/Cards/ActivityCard/ActivityCard"

export default {
    title: "components/Cards/Tarjeta de actividad",
    component: ActivityCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Titulo de la tarjeta' },
        caption: { control: 'text', description: 'Caption de la tarjeta' },
        information: { control: 'text', description: 'Informacion de la tarjeta' },
        progress: { control: { type: 'radio', options : [10, 60, 100] } },
        btnLabel : {control : 'text', description : 'Etiqueta de los botones'},
        showBtn1: { control: { type: 'boolean' } },
        showBtn2: { control: { type: 'boolean' } },
        showProgressBar: { control: { type: 'boolean' } },
        showTitle: { control: { type: 'boolean' } },
        showInfo: { control: { type: 'boolean' } },
    },
}

const Template = (args) => <ActivityCard {...args} />

export const Default = Template.bind({})

Default.args = {
title : 'Pendiente',
caption :'Ahora debes tomar la fotografía',
information : 'Regresar a completar la actividad',
progress : 60,
btnLabel : 'Button Text',
showBtn1 : true, 
showBtn2 : true, 
showProgressBar : true, 
showTitle : true, 
showInfo : true, 
}