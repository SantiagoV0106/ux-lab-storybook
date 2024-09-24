import { TextArea } from "./TextArea";
export default {
    title: 'Example/TextArea',
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