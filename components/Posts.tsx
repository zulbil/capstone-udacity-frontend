import React, { useEffect } from 'react'
import Post from './Post';

interface PostsProp {
    posts: any
    loading: boolean
    onDelete: any
}
const Posts = ({posts, loading = true, onDelete}: PostsProp) => {

    return (
        <div>
            { (posts.length > 0 && !loading) && posts.map((post:any, pos: number) => (
                <Post
                    key={pos}
                    {...post}
                    onDelete={onDelete}
                 />
            ))}
            {
                (posts.length === 0 && !loading) && (
                    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <span className="font-medium">No Posts! </span>
                    </div>
                )
            }
        </div>
    )
}

export default Posts