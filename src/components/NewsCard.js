import React from 'react'
import './styles/NewsCard.css'

export default function NewsCard(props) {
    const words = props.content.split(' ');
    const shortContent = words.slice(0, 13).join(' ');

    return (
        <div className="newsContainer">
            <div className="newsCard">
                <div key={props.id}>
                    <img className="newsImage" src={props.imageUrl} />
                    <div className="newsContent">
                        <div className="shortContentWrapper">
                            <p>{shortContent}...</p>
                        </div>
                        <a className="readMore" href={props.url}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
