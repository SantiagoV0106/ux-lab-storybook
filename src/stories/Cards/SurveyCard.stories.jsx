import { SurveyCard } from "../../components/Cards/SurveyCard/SurveyCard";

export default {
    title: "components/Cards/Survey Card",
    component: SurveyCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        formName: { control: 'text', description: 'Nombre del formulario' },
        progress: { control: { type: "radio", options: ["10", "60", "100"] } },
        executed: { control: { type: 'number', min: 0, max: 100, step: 1, } },
        showProgressBar: { control: { type: 'boolean' } },
        showMeta: { control: { type: 'boolean' } },
    },
}

const Template = (args) => <SurveyCard {...args} />

export const NoIniciado = Template.bind({})

NoIniciado.args = {
    formName: 'Nombre del formulario',
    progress: '10',
    executed: 0,
    showProgressBar: true,
    showMeta: true,
}

export const EnProgreso = Template.bind({})

EnProgreso.args = {
    formName: 'Nombre del formulario',
    progress: '60',
    executed: 0,
    showProgressBar: true,
    showMeta: true,
}
export const Completado = Template.bind({})

Completado.args = {
    formName: 'Nombre del formulario',
    progress: '100',
    executed: 0,
    showProgressBar: true,
    showMeta: true,
}