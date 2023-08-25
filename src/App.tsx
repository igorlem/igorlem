import GlobalStyleWrapper from 'components/GlobalStyleWrapper';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from 'routes/Main';

const App = () => {
  return (
    <GlobalStyleWrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </GlobalStyleWrapper>
  );
};

export default App;
