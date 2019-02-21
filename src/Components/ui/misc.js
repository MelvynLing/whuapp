import React from 'react';
import { Link } from 'react-router-dom';

const newLocal = "20px";
export const Tag = (props) => {
    const template = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Raleway',
            fontWeight: '900',
            ...props.add
        }}
    >
        {props.children}
    </div>

    if(props.link){
        return (
            <Link to={props.linkto}>
                {template}
            </Link>
            )
                }else{
                    return template
                }

}

export const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data
}

export const reversedArray = (actualArray) => {
    let reversedArray =  []
        for (let i=actualArray.length-1;i>=0;i--) {
            reversedArray.push(actualArray[i]);
        }
    return reversedArray
}