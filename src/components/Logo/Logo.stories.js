import {Logo} from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

export const Default = () => <Logo></Logo>;
