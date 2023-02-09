import React, { useEffect } from 'react'
import Post from './Post';

interface PostsProp {
    posts: any
}
const Posts = ({posts}: PostsProp) => {

    return (
        <div>
            { (posts.length > 0) && posts.map((post:any, pos: number) => (
                <Post
                    key={pos}
                    {...post}
                 />
            ))}
            {
                (posts.length === 0) && (
                    <div className=" mt-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div>
                            <p className="font-bold">No posts</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Posts