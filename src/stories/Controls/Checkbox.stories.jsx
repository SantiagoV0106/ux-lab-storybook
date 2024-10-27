import {Checkbox} from '../../components/Controls/Checkbox'

export default {
  title: "components/Controls/Checkbox",
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "radio",
      options: ["enabled", "hovered", "selected"]
    },
  },
}

export const Enabled = {
  args: {
    state: 'enabled',
  }
}
export const Hovered = {
  args: {
    state: 'hovered',
  }
}
export const Selected = {
  args: {
    state: 'selected',
  }
}