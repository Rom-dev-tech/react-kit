import PaintimgsList from './components/PaintingList';
import Section from './components/Section';
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
