import { AsideMenu } from "../../components/AsideMenu/AsideMenu";

export default {
    title: 'Example/Aside Menu',
    component: AsideMenu,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export const Open = {
    args: {
        isOpen: true
    }
}
export const Closed = {
    args: {
        isOpen: false
    }
}