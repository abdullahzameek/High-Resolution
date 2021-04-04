import React, {useEffect, useState} from 'react';
import firebase from '../../../firebase';


export default function (){
    const [postss, setPosts] = useState(null);
    const displayName = sessionStorage.getItem('displayName');

    async function postValid(posts){
        let newPosts = []
        console.log(posts);
        
        for (let i=0; i < posts.length;i++){
            let image = await firebase.storage().ref().child(sessionStorage.getItem('author')).child(posts[i].img).getDownloadURL();
                let newPost = (
                    <div>
                        {posts[i].post}
                        <img src={image}></img>
                        {posts[i].timestamp}
                    </div>
                )
                newPosts.push(newPost);
        }
            
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
