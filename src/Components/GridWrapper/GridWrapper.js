import { memo, useState, useEffect, useRef } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { GifsContainer } from './styled';
import GifDialog from '../GifDialog/GifDialog';
import { getSearchedGifs, getTrendingGifs } from '../../api/GiphyApi/giphyApi';
import ErrorWrapper from '../ErrorWrapper/ErrorWrapper';

const GridWrapper = (props) => {
    const { isFirst, bottomOffset, setBottomOffset, gifs, setGifs, searchQuery } = props;
    const loaderRef = useRef(null);
    const [isDialog, setIsDialog] = useState(false);
    const [currentGif, setCurrentGif] = useState(null);
    const [triggerIntersection, setTriggerIntersection] = useState(false);
    const firstTime = useRef(true);
    const [apiError, setApiError] = useState(false);

    const setGifsData = async (offset) => {
        try {
            const gifsData = searchQuery !== "" ? await getSearchedGifs(searchQuery, offset) : await getTrendingGifs(offset);
            setApiError(false);
            setGifs((oldGifs) => [...oldGifs, ...gifsData.data.data]);
        } catch (error) {
            if (offset === 0) {
                setApiError(true);
            } else {
                setBottomOffset((old) => 
                    {
                        if (old > 25) {
                            return old - 25;
                        } 
                        return old;
                    }
                );
            }
            console.log(`Error fetching result for ${searchQuery !== "" ? `search api with query ${searchQuery}` : "trending api"} `, JSON.stringify(error));
        }
    }

    useEffect(async () => {
        if (firstTime.current) {
            firstTime.current = false;
            return;
        }

        setGifsData(bottomOffset);
    }, [triggerIntersection]);

    useEffect(async () => {
        setGifsData(0);
        setBottomOffset(0);
    }, [searchQuery]);

    const callbackFunctionBottom =
        (entries, observer) => {
            const [entry] = entries;
            if (isFirst.current) {
                isFirst.current = false;
                return;
            }
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                setBottomOffset((old) => (old + 25));
                setTriggerIntersection(old => !old);
            }
        };

    useEffect(() => {
        const options = {
            root: null,
            margin: "0px",
            threshold: 0.5
        }
        const observer = new IntersectionObserver(callbackFunctionBottom, options);
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        }
    }, []);

    const openDialog = (gifObj) => {
        setIsDialog(true);
        setCurrentGif(gifObj);
        document.body.style.overflow = "hidden";
    }

    const onCloseClick = () => {
        setIsDialog(false);
        document.body.style.overflow = "unset";
    }

    if (apiError) {
        return <ErrorWrapper />;
    }

    return (
        <div>
            <GifsContainer className='gifsContainer'>
                {
                    gifs.map((gif, index) => (
                        <Card gif={gif} index={index} key={`${gif.id}-${index}`} onClickHandler={openDialog} />
                    ))
                }
            </GifsContainer>
            <Loader loaderRef={loaderRef} />
            {isDialog && <GifDialog gif={currentGif} onCloseClick={onCloseClick} />}
        </div>
    )
}

export default memo(GridWrapper);