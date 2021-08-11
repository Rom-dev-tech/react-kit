import PaintimgsList from './components/PaintingList/PaintingList';
import Section from './components/Section/Section';
import paintings from './paintings.json';

const App = () => {
  return (
    <>
      <Section title="Hero">
        <PaintimgsList items={paintings} />
      </Section>
    </>
  );
};

export default App;
