import { CategoryCard } from "../../components/Cards/CategoryCard/CategoryCard"

export default {
    title: "components/Cards/Category Card",
    component: CategoryCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        category: { control: 'text', description: 'Categoria de la tarjeta' },
        label: { control: 'text', description: 'Etiqueta de la tarjeta' },
        number: { control: { type : 'number', min : 1, max: 99, step : 1} },
        showIcon: { control: { type: 'boolean' } },
        showNumber: { control: { type: 'boolean' } },
    },
}

const Template = (args) => <CategoryCard {...args} />

export const Default = Template.bind({})

Default.args = {
    category : 'Categoría 1',
    label : 'TQ',
    number : 2,
    showIcon : true,
    showNumber : true
}