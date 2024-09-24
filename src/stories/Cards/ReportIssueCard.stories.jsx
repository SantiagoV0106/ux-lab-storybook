import { ReportIssueCard } from "../../components/Cards/ReportIssueCard/ReportIssueCard";

export default {
    title: "components/Cards/Report Issue Card",
    component: ReportIssueCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disable: { control: { type: 'boolean' } }
    },
};

export const Default = {
    args: {
        disable: false
    },
};
export const Disable = {
    args: {
        disable: true
    },
};