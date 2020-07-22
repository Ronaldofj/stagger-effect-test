import React, { useState } from 'react';
import Container from './components/Container';
import Button from './components/Button';
import ListItem from './components/ListItem';

const App: React.FC = () => {
  const [cursos, setCursos] = useState(['React', 'React Native', 'NodeJS']);
  const [visibility, setVisibility] = useState(false);

  function showList(): void {
    setVisibility(!visibility);
  }

  function makeDelay(index: number): number {
    let delay = 0;

    if (visibility) {
      delay = index * 100;
    } else {
      delay = (cursos.length - index - 1) * 100;
    }

    return delay;
  }

  return (
    <Container>
      <h1>Cursos - Stagger Effect</h1>
      <Button type="button" onClick={() => showList()}>
        {visibility ? 'Ocultar lista' : 'Mostrar lista'}
      </Button>
      <ul>
        {cursos.map((curso, index) => (
          <ListItem active={visibility} delay={makeDelay(index)}>
            {curso}
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default App;
