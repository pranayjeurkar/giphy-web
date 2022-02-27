import { useState, createContext, useRef } from 'react';
import GridWrapper from './components/GridWrapper/GridWrapper';
import Search from "./components/Search/Search";
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { HeaderContainer, AppContainer } from './styled';

export const ThemeContext = createContext({});

function App() {
  const [theme, setTheme] = useState("light");
  const [bottomOffset, setBottomOffset] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const isFirst = useRef(true);

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <AppContainer className={`App ${theme}`}>
          <HeaderContainer>
            <Search isFirst={isFirst} setSearchQuery={setSearchQuery} setGifs={setGifs} />
            <ThemeSelector />
          </HeaderContainer>
          <GridWrapper isFirst={isFirst} bottomOffset={bottomOffset} setBottomOffset={setBottomOffset} gifs={gifs} setGifs={setGifs} searchQuery={searchQuery} />
      </AppContainer>
    </ThemeContext.Provider>
  );
}

export default App;
