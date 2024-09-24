import { IssueCard } from "../../components/Cards/IssueCard/IssueCard"

export default {
    title: "components/Cards/Issue Card",
    component: IssueCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: { control: { type: 'radio', options: ['information', 'state', 'question'] } },
        options: { control: { type: 'array' } }
    },
}

const Template = (args) => <IssueCard {...args} />

export const Information = Template.bind({})

Information.args = {
    state: 'information',
    options: ['Option 1', 'Option 2', 'Option 3']
}
export const State = Template.bind({})

State.args = {
    state: 'state'
}
export const Question = Template.bind({})

Question.args = {
    state: 'question'
}