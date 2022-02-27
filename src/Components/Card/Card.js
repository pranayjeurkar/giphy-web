import { memo } from "react";
import { CardContainer, CardImage } from './styled';

const Card = ({gif, index, onClickHandler}) => {
    const { images, title } = gif;

    return (
        <CardContainer data-test={`card-number-${index}`}>
            <CardImage src={images.fixed_height.url} alt={title} onClick={() => onClickHandler(gif)} />
        </CardContainer>
    )
}

export default memo(Card);