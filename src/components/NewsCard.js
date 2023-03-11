import React from 'react'

export default function NewsCard(props) {
    const words = props.content.split(' ');
    const shortContent = words.slice(0, 13).join(' ');

    return (
        <div className="newsContainer mt-16 ml-2 inline-block font-inter">
            <div className="newsCard w-[38vh] xl:w-[28vw] h-[40vh] xl:h-96 -mt-14 xl:-mt-12 mb-10 ml-4 xl:ml-10 pt-2 bg-gray-800 bg-opacity-25 shadow-md backdrop-blur-md rounded-3xl justify-center overflow-hidden">
                <div key={props.id}>
                    <img className="newsImage block ml-4 xl:ml-3.5 mt-2 w-[77vw] xl:w-[26vw] h-56 rounded-2xl object-cover object-center" src={props.imageUrl} />
                    <div className="newsContent grid flex-row justify-between items-center text-center m-1">
                        <div className="shortContentWrapper no-underline font-normal flex-1">
                            <p>{shortContent}...</p>
                        </div>
                        <a className="readMore no-underline text-gray-600 hover:text-black" href={props.url}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
