import { Select } from "./Select";

export default {
    title: 'Example/Select',
    component: Select,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export const Example = {
    args: {
        label: 'Label',
        required: false,
        defaultOption: 'Default Option',
        options: ['Option 1', 'Option 2', 'Option 3'],
        name: 'Select'
    }
}