// import React, { useState } from 'react'
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// const Comment = ({ id }) => {
//     const user = JSON.parse(localStorage.getItem("user"));
// }

// export default Comment
import React from 'react'

const Comment = () => {
    if (window.FB) {
        window.FB.XFBML.parse();
    }
    return (
        <div class="fb-comments" data-href="http://localhost:3000/watchmovie/617b8e89c3f5750016080233" data-width="200" data-numposts="5"></div>
    )
}

export default Comment;
