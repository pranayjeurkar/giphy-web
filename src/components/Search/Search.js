import { memo, useContext } from "react";
import { SearchWrapper } from './styled';
import { ThemeContext } from '../../App';
import { debounce } from '../../utils/utils';

const DELAY = 500;

const Search = (props) => {
    const { isFirst, setSearchQuery, setGifs } = props;
    const ThemeContextVal = useContext(ThemeContext);

    const updateState = (query) => {
        query = query.toLowerCase();
        isFirst.current = true;
        setSearchQuery(() => query);
        setGifs(() => []);
    }

    const myDebouncedFunction = debounce(updateState, DELAY);

    const onChangeSearch = (e) => {
        myDebouncedFunction(e.target.value);
    };

    return (
        <SearchWrapper className={ThemeContextVal.theme} placeholder="Search gifs" onChange={onChangeSearch} />
    )
}

export default memo(Search);