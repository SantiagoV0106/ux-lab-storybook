import { ResumenActividadesEjecutadas } from "../../components/Cards/ResumenActividadesEjecutadas/ResumenActividadesEjecutadas";

export default {
    title: "components/Cards/Resumen Actividades Ejecutadas",
    component: ResumenActividadesEjecutadas,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: { type: "select", options: ["unidad-1", "unidad-1-3", "unidad-4"] } },
    },
};

const Template = (args) => <ResumenActividadesEjecutadas {...args} />

export const Unidad1 = Template.bind({})
Unidad1.args = {
    variant: 'unidad-1',
}

export const Unidad1_3 = Template.bind({})
Unidad1_3.args = {
    variant: 'unidad-1-3',
}
export const Unidad4 = Template.bind({})
Unidad4.args = {
    variant: 'unidad-4',
}
