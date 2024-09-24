import { ReportActivityCard } from "../../components/Cards/ReportActivityCard/ReportActivityCard";

export default {
    title: "components/Cards/Report Activity Card",
    component: ReportActivityCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        options: { control: { type: 'array' } }
    },
};

export const Default = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3']
    },
};
