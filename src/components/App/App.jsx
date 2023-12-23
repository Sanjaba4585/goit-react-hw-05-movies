import Header from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} /> <Route index element={<Home />} />
    </Routes>
  );
};
export default App;
