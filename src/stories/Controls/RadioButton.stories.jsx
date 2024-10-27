import { RadioButton } from "../../components/Controls/RadioButton";
import { action } from "@storybook/addon-actions";

export default {
    title: "components/Controls/Radio Button",
    component: RadioButton,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes:{
        state:{
            control: "radio",
            options: ["unable", "hovered", "selected"]
        }
    },
    args:{
        onClick: action("button-click"),
    }
}

export const Unable = {
    args: {
        state: "unable"
    }
}

export const Hovered = {
    args: {
        state: "hovered"
    }
}

export const Selected = {
    args: {
        state: "selected"
    }
}