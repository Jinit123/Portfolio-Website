import React from 'react'
import './MyWork.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

const MyWork = () => {
    return (
        <div className='mywork' id='work'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <div className='mywork-collection'>
                            <a key={index} href={work.w_link}>
                                <img key={index} src={work.w_img} alt="" />
                                <h2>{work.w_title}</h2>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork
