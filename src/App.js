import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Привет! Это моя страница на React");

  const handleClick = () => {
    setMessage("Ты нажала кнопку! 🎉");
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={handleClick}>Нажми меня</button>
      <blockquote cite="https://example.com/article">
        <p>
          Жизнь — это то, что с тобой происходит, пока ты строишь другие планы.
        </p>
        <footer>
          — <cite>Джон Леннон</cite>
        </footer>
      </blockquote>

      <p>Это абзац в React.</p>

      <pre>Это абзац в React.</pre>

      <span>Это абзац в React.</span>

      <a href="https://example.com">Это ссылка в React.</a>

      <b>Это жирный текст в React.</b>

      <big>Это большой текст в React.</big>

      <em>Это курсивный текст в React.</em>

      <i>Это курсивный текст в React.</i>

      <strong>Это жирный текст в React.</strong>

      <sub>Это подстрочный текст в React.</sub>

      <sup>Это надстрочный текст в React.</sup>

      <small>Это маленький текст в React.</small>

      <del>Это удаленный текст в React.</del>

      <ins>Это вставленный текст в React.</ins>

      <dl>
        <dt>Это определение в React.</dt>
        <dd>Это определение в React.</dd>
      </dl>
    </div>
  );
}

export default App;
