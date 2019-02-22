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
                color='#801638'
                link={true}
                linkto='/the_team'
                add={{
                    border: '3px solid #801638',
                    fontWeight: "700",
                    fontSize: '25px'
                }}
            >
                See More Matches
            </Tag>

            </div>
        </div>
    )
}

export default MatchesHome;