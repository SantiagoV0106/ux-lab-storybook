import { SelectionCard } from "../../components/Controls/SelectionCard";

export default {
    title: 'components/Controls/Selection Card',
    component: SelectionCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
          control: 'text',
          description: 'Title of the card',
        },
        caption: {
          control: 'text',
          description: 'Caption below the title',
        },
        checkboxState: {
          control: 'radio',
          options: ['enabled', 'hovered', 'selected'],
          description: 'State of the checkbox',
        },
    }
}

export const Default = {
    args: {
        title: "Nombre Empresa",
        caption: "Estado",
        checkboxState: "enabled"
    }
}