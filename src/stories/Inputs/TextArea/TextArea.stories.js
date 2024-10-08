import { TextArea } from "../../../components/Inputs/TextArea/TextArea";
export default {
    title: 'components/Inputs/Text Area',
    component: TextArea,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export const Text = {
    args: {
        label: 'label',
        placeholder: 'place your text here',
        required: false
    }
}