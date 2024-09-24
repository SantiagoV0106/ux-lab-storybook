import { Input } from "../../components/Input/Input";

export default {
    title: 'Example/Input',
    component: Input,
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
        type: 'text',
        label: 'label',
        placeholder: 'placeholder',
        required: false
    }
}
export const Email = {
    args: {
        type: 'email',
        label: 'label',
        placeholder: 'place your email here',
        required: false
    }
}
export const Password = {
    args: {
        type: 'password',
        label: 'label',
        placeholder: 'place your password here',
        required: false
    }
}