import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'
import { getPosts } from '../services/postService'

const Feed = () => {
  const [postData, setPostData]         =   useState<any[]>([])
  const [newPost, setNewPost]           =   useState({})
  const [loading, setLoading]          =   useState(true)
  const session                         =   useSession()
  const data                            =   session?.data
  const idToken                         =   data?.user?.idToken as string

  const fetchPost = async () => {
    try {
      const data = await getPosts(idToken)
      setPostData(data) 
      setLoading(false)
    } catch (error) {
      setPostData([]) 
      setLoading(false)
    }
  }

  function addPost(post: any){
    setNewPost(post)
  }

  function deletePost() {
    setNewPost({})
  }

  useEffect(() => {
   fetchPost()
  }, [newPost])
  

  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            {/* <Stories /> */}
            <InputBox onAddPost={addPost} />
            <Posts posts={postData} onDelete={deletePost} loading={loading} />
        </div>
    </div>
  )
}

export default Feed