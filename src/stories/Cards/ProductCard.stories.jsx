import { ProductCard } from "../../components/Cards/ProductCard/ProductCard"

export default {
    title: "components/Cards/Product Card",
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', description: 'Nombre del product' },
        caption: { control: 'text', description: 'Categoria del product' },
        number1: { control: { type: 'number', min: 0, max: 1000000, step: 1 } },
        number2: { control: { type: 'number', min: 0, max: 1000000, step: 1 } },
        showCheckBox: { control: { type: 'boolean' } },
        showIcon: { control: { type: 'boolean' } },
        variant:{control : {type : 'radio', options : ['oneIcon', 'TwoIcons']}},
    },
}

const Template = (args) => <ProductCard {...args} />

export const Default = Template.bind({})

Default.args = {
  title : 'Nombre del producto',
  caption : 'Categoria',
  number1 : 50000,
  number2 : 50000,
  showCheckBox : true,
  showIcon : true,
  variant : 'oneIcon',
}
export const TwoIcons = Template.bind({})

TwoIcons.args = {
    title : 'Nombre del producto',
  caption : 'Categoria',
  variant : 'twoIcons',
}