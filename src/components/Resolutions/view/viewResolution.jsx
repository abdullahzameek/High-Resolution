import React, {useEffect, useState} from 'react';
import firebase from '../../../firebase';


export default function (){
    const [postss, setPosts] = useState(null);
    const displayName = sessionStorage.getItem('displayName');

    async function postValid(posts){
        let newPosts = []
        posts.foreach(
            async (post) => {
                let image = await firebase.storage().child(displayName).child(post.img).getDownloadURL();
                let newPost = (
                    <div>
                        {post.ost}
                        <img src={image}></img>
                    </div>
                )
                newPosts.push(newPost);
            }
        )
        setPosts([...newPosts]);
    }
    useEffect(
        function(){
            console.log(sessionStorage.getItem('posts'));
            postValid(JSON.parse(sessionStorage.getItem('posts')))
        }, []
    )
    return (
        <div>
            {/* put Res info here */}
            {postss}
        </div>
    
    )
}
