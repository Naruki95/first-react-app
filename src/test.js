import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function Test() {
  const [theme, setTheme] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'black'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'black' : 'white')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
