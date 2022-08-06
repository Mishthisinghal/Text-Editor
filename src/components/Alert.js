import React from 'react'

function Alert(props) {
    
    return (
        <div style={{height: "40px"}}>
        {props.alerttype && props.alertmsg && <div  className={`alert alert-${props.alerttype} alert-dismissible fade show`} role="alert">
            <strong>{props.alerttype} : </strong> {props.alertmsg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}</div>
    )
}

export default Alert