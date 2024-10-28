import { IssueCard } from "../../components/Cards/IssueCard/IssueCard"
 
import { userEvent, within } from '@storybook/test';

export default {
    title: "components/Cards/Issue Card",
    component: IssueCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: { control: { type: 'radio', options: ['information', 'state', 'question'] } },
        options: { control: { type: 'array' } }
    },
}

const Template = (args) => <IssueCard {...args} />

export const Information = Template.bind({})

Information.args = {
    state: 'information',
    options: ['Option 1', 'Option 2', 'Option 3']
}
export const State = Template.bind({})

State.args = {
    state: 'state'
}
export const Question = Template.bind({})

Question.args = {
    state: 'question'
}



export const TestingCard = {

    
    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);
   
      // 👇 Simulate interactions with the component
      await userEvent.type(canvas.getByTestId('text'), 'Hollaaaaaa');

      await userEvent.type(canvas.getByTestId('option'), 'Dormir');

   
      // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    //   await userEvent.click(canvas.getByRole('button'));
   
      // 👇 Assert DOM structure
    //   await expect(
    //     canvas.getByText(
    //       'Everything is perfect. Your added your photo!',
    //     ),
    //   ).toBeInTheDocument();
    },
  };

  TestingCard.args = {
    state: 'information',
    options: ['Comer', 'Bailar', 'Dormir']
}