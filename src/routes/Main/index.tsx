import HeaderSection from 'components/HeaderSection';
import { mainStyle } from './styles';

const leadLines = ['I am', 'designer,'];

const Main: React.FC = () => {
  return (
    <main css={mainStyle}>
      {/* <Cursor /> */}

      <HeaderSection lines={leadLines} />

      {/* {textBlocks.map((block, i) => (
        <TextSection key={`text-block-i`} lines={block.lines} />
      ))} */}

      {/* Temporary solution */}
      <div style={{ height: '100000px' }}></div>
    </main>
  );
};

export default Main;
