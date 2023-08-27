import AnimatedLeadSection from 'components/AnimatedLeadSection';
import HeaderSection from 'components/HeaderSection';
import TextColumn from 'components/TextColumn';
import { mainStyle } from './styles';

const blocks = [
  [
    'I create',
    'visual languages',
    'design systems',
    'and',
    'exciting prototypes.',
  ],
  ['I work on', 'full-scale projects', 'striving for', 'utter perfection.'],
  ['Packing', 'innovative function', 'in sexy form.'],
  ['Applying', 'traditional', 'and unorthodox', 'approaches.'],
  ['Making it', 'for joy.'],
];

const Main: React.FC = () => {
  return (
    <main css={mainStyle}>
      {/* <Cursor /> */}
      <HeaderSection />
      <AnimatedLeadSection lines={['I am', 'designer.']} />
      <TextColumn blocks={blocks} />
    </main>
  );
};

export default Main;
