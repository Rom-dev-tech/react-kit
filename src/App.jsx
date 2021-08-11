import PaintimgsList from './components/PaintingList/PaintingList';
import Section from './components/Section/Section';
import paintings from './paintings.json';
import colorPickerOptions from './ColorPicker.json';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Box from './components/Box/Box';

const App = () => {
  return (
    <>
      <Container>
        <Section title="Hero">
          <PaintimgsList items={paintings} />
        </Section>
      </Container>

      <Container>
        <Alert text="Шеф все пропало!" type="success" />
        <Alert text="Шеф все пропало!" type="warning" />
        <Alert text="Шеф все пропало!" type="error" />
      </Container>

      <Container>
        <ColorPicker options={colorPickerOptions} />
      </Container>

      <Container>
        <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
        <Box type="medium" />
        <Box type="large" />
      </Container>
    </>
  );
};

export default App;
