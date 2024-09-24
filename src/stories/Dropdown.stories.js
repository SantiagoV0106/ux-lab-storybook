import { Dropdown } from "./Dropdown";
import { DemoIcon } from "./Dropdown";

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
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
        title: 'title',
        subtitle: 'subtitle',
        detailTitle: 'detail title',
        detailSubtitle: 'detail subtitle',
        children: 'detail content',
        icon: DemoIcon
    }
}