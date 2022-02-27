import { memo, useState, useContext } from "react";
import { DialogContainer, GifContainer, CloseButton, GifImage, PausePlayButton } from './styled';
import { ThemeContext } from '../../App';
import play_button from '../../images/play_button.png';

const GifDialog = (props) => {
    const { gif, onCloseClick } = props;
    const [playButton, setPlayButton] = useState(false); 
    const ThemeContextVal = useContext(ThemeContext);
    const [toggleClick, setToggleClick] = useState(true);
    const onImageClick = () => {
        setToggleClick(!toggleClick);
    }

    return (
        <DialogContainer>
            <CloseButton className={ThemeContextVal.theme} onClick={onCloseClick}>&times;</CloseButton>
            <GifContainer onClick={onImageClick}>
                <GifImage src={toggleClick ? gif.images.original_still.url : gif.images.original.webp} alt={gif.title} onLoad={() => setPlayButton(true)} />
                {toggleClick && playButton && <PausePlayButton src={play_button} alt={`Playing Gif ${gif.title}`} />}
            </GifContainer>
        </DialogContainer>
    )
}

export default memo(GifDialog);