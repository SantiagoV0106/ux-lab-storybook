import { NovedadCard } from "../../components/Cards/NovedadCard/NovedadCard"

export default {
    title: "components/Cards/Tarjeta de Novedad",
    component: NovedadCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: { control: {type : 'radio', options : ['information', 'state', 'question']} },
    },
}

const Template = (args) => <NovedadCard {...args} />

export const Information = Template.bind({})

Information.args = {
    state : 'information'
}
export const State = Template.bind({})

State.args = {
    state : 'state'
}
export const Question = Template.bind({})

Question.args = {
    state : 'question'
}