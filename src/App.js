import { useState, createContext, useRef } from 'react';
import GridWrapper from './Components/GridWrapper/GridWrapper';
import Search from "./Components/Search/Search";
import ThemeSelector from './Components/ThemeSelector/ThemeSelector';
import { HeaderContainer, AppContainer } from './styled';
import { gifsData } from './Components/GridWrapper/data';

export const ThemeContext = createContext({});

function App() {
  const [theme, setTheme] = useState("light");
  const [bottomOffset, setBottomOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(-1);
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const isFirst = useRef(true);

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <AppContainer className={`App ${theme}`}>
        {/* <AppBody> */}
          <HeaderContainer>
            <Search isFirst={isFirst} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setBottomOffset={setBottomOffset} setTopOffset={setTopOffset} setGifs={setGifs} />
            <ThemeSelector />
          </HeaderContainer>
          <GridWrapper isFirst={isFirst} bottomOffset={bottomOffset} setBottomOffset={setBottomOffset} topOffset={topOffset} setTopOffset={setTopOffset} gifs={gifs} setGifs={setGifs} searchQuery={searchQuery} />
        {/* </AppBody> */}
      </AppContainer>
    </ThemeContext.Provider>
  );
}

export default App;
