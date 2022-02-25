import { memo, useContext } from "react";
import { SearchWrapper } from './styled';
import { ThemeContext } from '../../App';
import debounce from "lodash.debounce";

const DELAY = 1000;
let counter = 0;

const Search = (props) => {
    const { isFirst, searchQuery, setSearchQuery, setBottomOffset, setTopOffset ,setGifs } = props;
    const ThemeContextVal = useContext(ThemeContext);

    const updateState = (query) => {
        query = query.toLowerCase();
        console.log("query ", query, counter++);
        isFirst.current = true;
        // TODO:: setTopOffset get offset based on gifs number logic here aswell
        setSearchQuery(()=>query);
        // setBottomOffset(()=> 0);
        // setTopOffset(0);
        setGifs(() => []);
    }
    
    const myDebouncedFunction = debounce(updateState, DELAY);

    const onChangeSearch = (e) => {
        myDebouncedFunction(e.target.value);
    };

    return (
        <SearchWrapper className={ThemeContextVal.theme}  placeholder="Search gifs" onChange={onChangeSearch} />
    )
}

export default memo(Search);