import React from 'react';


const SingleUser = (props) =>(
    <>
        <span>{props.firstName}</span>&nbsp;
        <span>{props.lastName}</span>&nbsp;
        <span>{props.age}</span>
    </>
);

export default SingleUser;