import { memo, useState, useEffect, useRef, useCallback } from 'react';
import { Grid } from '@giphy/react-components';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { GifsContainer } from './styled';
import { gifsData } from './data';
import GifDialog from '../GifDialog/GifDialog';

// TODO:: Remove element on below 

const GridWrapper = (props) => {
    const { isFirst, bottomOffset ,setBottomOffset, topOffset, setTopOffset ,gifs ,setGifs, searchQuery} = props;
    const loaderRef = useRef(null);
    // const loaderRefTop = useRef(null);
    const [isDialog, setIsDialog] = useState(false);
    const [currentGif, setCurrentGif] = useState(null);
    const [triggerIntersection, setTriggerIntersection] = useState(false);
    const firstTime = useRef(true);

    const callbackFunctionBottom =
        (entries, observer) => {
            const [entry] = entries;
            if(isFirst.current) {
                isFirst.current = false;
                return;
            }
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                console.log("i am in offset")
                setBottomOffset((old) => (old + 25));
                setTriggerIntersection(old => !old);
            }
        };

    // const callbackFunctionTop =
    //     (entries, observer) => {
    //         const [entry] = entries;
    //         if (entry.isIntersecting) {
    //             setTopOffset((old) => {
    //                 if (old > 25) {
    //                     return old - 25;
    //                 } else {
    //                     return 0;
    //                 }
    //             });
    //         }
    //     };

    useEffect(async() => {
        // if (bottomOffset == 0) {
        //     return;
        // }
        // if (bottomOffset >= 125) {
        //     setTopOffset(bottomOffset-125);
        // }
        // console.log("searchQuery " ,searchQuery);
        // if (gifs.length > 125) {
        //     //remove from start of the array
        //     gifs.splice(0,25);
        //     setGifs(gifs);
        // }
        if (firstTime.current) {
            firstTime.current = false;
            return;
        }
console.log(" i am insearch query", searchQuery, bottomOffset)
        if (searchQuery !== "") {
            try {
                let gifsData = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=44A7F4nvMFHKr7lYMQIp4KJv0XR5bvm4&q=${searchQuery}&limit=25&offset=${bottomOffset}&rating=g&lang=en`);
                gifsData = await gifsData.json();
                setGifs((oldGifs) => [...oldGifs, ...gifsData.data]);

                // setGifs((oldGifs) => {
                //     let gifs = [...oldGifs, ...gifsData.data];
                //     if (gifs.length > 125) {
                //         gifs.splice(0,25);
                //         return gifs;
                //     } 
                //     return gifs;
                // }); 
            } catch (error) {
                console.log(`Error Fetching search result for ${searchQuery}` , JSON.stringify(error));
            }
        } else {
            try {
                let gifsData = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=44A7F4nvMFHKr7lYMQIp4KJv0XR5bvm4&limit=25&rating=g&offset=${bottomOffset}`);
                gifsData = await gifsData.json();
                setGifs((oldGifs) => [...oldGifs, ...gifsData.data]);

                // setGifs((oldGifs) => {
                //     let gifs = [...oldGifs, ...gifsData.data];
                //     if (gifs.length > 125) {
                //         gifs.splice(0,25);
                //         // return gifs;
                //     } 
                //     return gifs;
                // }); 
            } catch (err) {
                console.log(JSON.stringify(err));
            }
        }
    }, [triggerIntersection]);

    useEffect(async() => {
        // if (bottomOffset == 0) {
        //     return;
        // }
        // if (bottomOffset >= 125) {
        //     setTopOffset(bottomOffset-125);
        // }
        // console.log("searchQuery " ,searchQuery);
        // if (gifs.length > 125) {
        //     //remove from start of the array
        //     gifs.splice(0,25);
        //     setGifs(gifs);
        // }
console.log(" i am insearch query pranay", searchQuery, bottomOffset)
        if (searchQuery !== "") {
            try {
                let gifsData = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=44A7F4nvMFHKr7lYMQIp4KJv0XR5bvm4&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en`);
                gifsData = await gifsData.json();
                setGifs((oldGifs) => [...oldGifs, ...gifsData.data]);

                // setGifs((oldGifs) => {
                //     let gifs = [...oldGifs, ...gifsData.data];
                //     if (gifs.length > 125) {
                //         gifs.splice(0,25);
                //         return gifs;
                //     } 
                //     return gifs;
                // }); 
            } catch (error) {
                console.log(`Error Fetching search result for ${searchQuery}` , JSON.stringify(error));
            }
        } else {
            try {
                let gifsData = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=44A7F4nvMFHKr7lYMQIp4KJv0XR5bvm4&limit=25&rating=g&offset=0`);
                gifsData = await gifsData.json();
                setGifs((oldGifs) => [...oldGifs, ...gifsData.data]);

                // setGifs((oldGifs) => {
                //     let gifs = [...oldGifs, ...gifsData.data];
                //     if (gifs.length > 125) {
                //         gifs.splice(0,25);
                //         // return gifs;
                //     } 
                //     return gifs;
                // }); 
            } catch (err) {
                console.log(JSON.stringify(err));
            }
        }
        setBottomOffset(0);
    }, [ searchQuery ]);

    // useEffect(async() => {
    //     if (topOffset === -1) {
    //         return;
    //     }
    //     // console.log("searchQuery " ,searchQuery);
    //     // if (gifs.length > 125) {
    //     //     //remove from end of the array
    //     //     gifs.splice(-25);
    //     //     setGifs(gifs);
    //     // }

    //     if (searchQuery !== "") {
    //         try {
    //             let gifsData = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=44A7F4nvMFHKr7lYMQIp4KJv0XR5bvm4&q=${searchQuery}&limit=25&offset=${topOffset}&rating=g&lang=en`);
    //             gifsData = await gifsData.json();
    //             console.log("i am in search query results 2")
    //             // setGifs((oldGifs) => [...gifsData.data, ...oldGifs]);

    //             setGifs((oldGifs) => {
    //                 let gifs = [...gifsData.data, ...oldGifs];
    //                 if (gifs.length > 175) {
    //                     gifs.splice(-25);
    //                     // return gifs
    //                 }
    //                 return gifs;

    //             });
    //         } catch (error) {
    //             console.log(`Error Fetching search result for ${searchQuery}` , JSON.stringify(error));
    //         }
    //     } else {
    //         try {
    //             let gifsData = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=44A7F4nvMFHKr7lYMQIp4KJv0XR5bvm4&limit=25&rating=g&offset=${topOffset}`);
    //             gifsData = await gifsData.json();
    //             setGifs((oldGifs) => [...gifsData.data, ...oldGifs]);
    //         } catch (err) {
    //             console.log(JSON.stringify(err));
    //         }
    //     }
    // }, [topOffset, searchQuery]);

    useEffect(() => {
        const options = {
            root: null,
            margin: "0px",
            threshold: 0.5
        }
        const optionsTop = {
            root: null,
            margin: "0px",
            threshold: 0
        }
        const observer = new IntersectionObserver(callbackFunctionBottom, options);
        // const observerTop = new IntersectionObserver(callbackFunctionTop, options);
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        // if (loaderRefTop.current) {
        //     observerTop.observe(loaderRefTop.current);
        // }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
            // if (loaderRefTop.current) {
            //     observerTop.unobserve(loaderRefTop.current);
            // }
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



    return (
        <div>
            {/* <div ref={loaderRefTop}></div> */}
            {/* {<div loaderRef={loaderRefTop} />} */}
            <GifsContainer className='gifsContainer'>
                {
                    gifs.map((gif, index) => (
                        <Card gif={gif} index={index} key={`${gif.id}`} onClickHandler={openDialog} />
                    ))
                }
            </GifsContainer>
            {<Loader loaderRef={loaderRef} />}
            {isDialog && <GifDialog gif={currentGif} onCloseClick={onCloseClick} />}
        </div>
    )
}

export default memo(GridWrapper);