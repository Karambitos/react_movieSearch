import React from 'react'
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';
// import { v4 as uuidv4 } from 'uuid';


function MovieDetailsPage({ imagesArr, currentImg }) {
    // const onClick = (event) => {
    //     currentImg(event.target.src)
    // }
    return (
        <>
            {/* {
                imagesArr.map(({ largeImageURL, tags }) => {
                    return <li key={uuidv4()} className={styles.galleryItem} onClick={onClick}>
                        <img src={largeImageURL} alt={tags} />
                    </li>
                })
            } */}
        </>
    )
}

export { MovieDetailsPage }