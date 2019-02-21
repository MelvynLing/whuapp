import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './blocks'

const MatchesHome = () => {

    return (
        <div className='home_matches_wrapper'>
            <div className='container'>
            <Tag
                bck='#801638'
                size='50px'
                color='#ffffff'
            >
                Matches
            </Tag>

           <Blocks/>

            <Tag
                bck='#ffffff'
                size='22px'
                color='#801638'
                link={true}
                linkto='/the_team'
            >
                See More Matches
            </Tag>

            </div>
        </div>
    )
}

export default MatchesHome;