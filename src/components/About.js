import React from 'react'

function About(props) {
    return (
        <>
            <div className="container">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About Text Editor</h2></div>
            <div className="container">
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium minima distinctio, illum quaerat voluptates incidunt vero error veritatis aliquid cumque? Dignissimos, ad nisi quas autem sapiente facilis quisquam laudantium sit eos ex perferendis modi quaerat dicta velit. At modi iusto soluta sequi alias vitae, quisquam hic aut quas illo consectetur eligendi veniam repellendus iure ab ex voluptates eius facilis distinctio, doloribus perspiciatis! Est maxime aut numquam! Illum deserunt perspiciatis quo distinctio dignissimos ducimus sapiente ipsum quos eveniet quae ipsa temporibus laboriosam sint corporis deleniti voluptas impedit repellendus, magnam saepe! Mollitia, dolore ipsa. Fugiat asperiores quam sequi ipsam vel nisi?</p></div>
        </>
    )
}

export default About