import Joke from "./components/Joke";
import jokesData from "./jokesData";

/**
  - No componente Joke, adicione um botão para mostrar/esconder a punchline
  - O texto do botão deve alternar entre mostrar punchline e esconder punchline
  de acordo com o status da punchline
 */

export default function App() {
  const jokes = jokesData.map((joke, index) => (
    <Joke key={index} punchline={joke.punchline} setup={joke.setup} />
  ));

  return <div data-testid="App">{jokes}</div>;
}
