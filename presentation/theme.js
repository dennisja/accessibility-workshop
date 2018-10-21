import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
  ...theme,
  colors: {
    text: 'rgb(106, 215, 152)',
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