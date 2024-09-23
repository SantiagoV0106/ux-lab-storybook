import { TiempoEstimado } from "../../components/Cards/TiempoEstimado/TiempoEstimado";

export default {
    title: "components/Cards/Tiempo Estimado",
    component: TiempoEstimado,
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