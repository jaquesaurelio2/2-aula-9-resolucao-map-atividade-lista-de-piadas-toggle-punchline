import { useState } from "react";

export default function Joke({ setup, punchline }) {
  const [show, setShow] = useState(false);

  const handleToggleShow = () => setShow((oldShow) => !oldShow);

  const buttonText = show ? "Esconder punchline" : "Mostrar punchline";

  return (
    <div data-testid="Joke">
      {setup && <h3>Setup: {setup}</h3>}
      {show && <p>Punchline: {punchline}</p>}
      <button onClick={handleToggleShow}>{buttonText}</button>
      <hr />
    </div>
  );
}
