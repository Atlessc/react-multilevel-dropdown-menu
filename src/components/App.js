import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import ContactMe from '../routes/ContactMe';
import Layout from './Layout';
import Skills from '../routes/Skills';
import Projects from '../routes/Projects';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
