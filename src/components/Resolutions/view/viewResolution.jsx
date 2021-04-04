import React, {useEffect, useState} from 'react';
import firebase from '../../../firebase';
import './viewResolution.css';


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
                        <div className = "PostBox">
                        <p className="PostContent">
                            {posts[i].timestamp}
                            <br></br>
                            <br></br>
                            {posts[i].post}</p>
                        <img src={image} className = "PostImage"></img>
                        </div>
                        
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
