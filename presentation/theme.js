import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...theme,
  colors: {
    text: '#FF6D00',
    background: 'rgb(1, 22, 39)',
    link: '#40C4FF',
  },
  prism: {
    style: okaidia,
  },
  strong: {
    color: 'yellow',
    textTransform: 'capitalize',
  },
};