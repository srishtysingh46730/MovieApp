import React from 'react'
import {Badge} from "@material-ui/core"
import { img_300, unavailable } from '../../config/config'
import "./SingleContent.css"
import ContentModel from "../ContentModal/ContentModal"
const SingleContent = ({
    id,
    poster,
    title,
    media_type,
    vote_average,
}) => {
    return (
        <ContentModel media_type={media_type} id={id}>
            <Badge badgeContent={vote_average}
             color={vote_average > 6 ? "primary" : "secondary"} />
            <img className='poster' src={poster ? `${img_300}/${poster}`: unavailable} alt={title}/>
            <b className='title'>{title}</b>
            <span className='subTitle'>{media_type==='tv'?'Tv Series':'Movies'}
            </span>
        </ContentModel>
    )
}

export default SingleContent