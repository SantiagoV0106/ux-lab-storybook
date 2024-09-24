import { TimeCard } from "../../components/Cards/TimeCard/TimeCard";

export default {
    title: "components/Cards/Time Card",
    component: TimeCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes : {
        time : { control : 'text', description: 'Tiempo Estimado'}
    }
}

export const Default = {
    args : {
        time : '00:00:00'
    }
}