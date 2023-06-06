import {Button} from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};
const Template = (args) => <Button {...args}>Button</Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryButton = Template.bind({});

export const BlackButton = {
  args: {
    label: 'BlackButton',
    bgColor: '#000',
    textColor: '#fff',
  },
};
