import { SeguimientoDeEjecucion } from "../../components/Cards/SeguimientoDeEjecucion/SeguimientoDeEjecucion";

export default {
    title: "components/Cards/Seguimiento de ejecución",
    component: SeguimientoDeEjecucion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        progress: { control: { type: "radio", options: ["10", "60", "100"] } },
        activity : { control : 'text', description: 'Actividad'}
    },
}

const Template = (args) => <SeguimientoDeEjecucion {...args}/>

export const Default = Template.bind({})

Default.args = {
    activity : '<Actividad por Realizar>',
    progress : '10'
}

export const Progress = Template.bind({})

Progress.args = {
    activity : '<Actividad por Realizar>',
    progress : '60'
}
export const Completed = Template.bind({})

Completed.args = {
    activity : '<Actividad por Realizar>',
    progress : '100'
}