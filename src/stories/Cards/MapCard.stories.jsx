import { MapCard } from "../../components/Cards/MapCard/MapCard";

export default {
    title: "components/Cards/Map Card",
    component: MapCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        start: { control: {type : 'radio', options : ['start', 'started']} },
        btnLabel : {control : 'text', description : 'Etiqueta del boton'}
    },
}

const Template = (args) => <MapCard {...args} />

export const Start = Template.bind({})

Start.args = {
    start : 'start',
    btnLabel : 'Button Text'
}
export const Started = Template.bind({})

Started.args = {
    start : 'started',
    btnLabel : 'Button Text'
}