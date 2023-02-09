import { ChatAlt, Share, ThumbUp } from 'heroicons-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { deletePost } from '../services/postService';

interface PostProp {
    postId: string;
    message: string;
    attachmentUrl: string;
    createdAt: string;
    updatedAt: string;
}

const Post = (props: PostProp) => {
  const {postId, message, attachmentUrl, createdAt, updatedAt } = props
  const { data } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const removePost = async () => {
    try {
      const result = confirm("Are you sure you want to delete this item?");
      const idToken = data?.user?.idToken || ''
      if (result) {
        await deletePost(idToken, postId)
        alert('Post successfully deleted...')
      } 
    } catch (error: any) {
      console.log('Remove Post')
      console.log(error.message)
    }
  }
  
  const editPost = () => {

  }

  return (
    <div className='flex flex-col mt-5 rounded-t-2xl'>
      <div className='p-5 bg-white shadow-sm'>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-2'>
            {data?.user?.image && (
              <Image
                  src={data?.user?.image}
                  className="rounded-full cursor-pointer"
                  width={40} 
                  height={40} 
                  alt="profile picture"
              />
            )}
            <div>
              <p className='font-medium'></p>
              <p className='text-xs text-gray-400'>
                {(new Date(createdAt)).toDateString()}
              </p>
            </div>
          </div>
          <div className='flex flex-col space-x-2 relative'>
            <button onClick={toggleDropdown} id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
            {isOpen && 
            (
              <div id="dropdownDotsHorizontal" style={{top: '50px'}} className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a 
                    onClick={editPost}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    >Edit</a>
                  </li>
                  <li>
                    <a type='button' onClick={removePost} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Delete</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      { attachmentUrl && (
        <div className='relative h-56 md:h-96 bg-white overflow-hidden'>
          <Image 
            width={700} 
            height={500}
            src={attachmentUrl} 
            alt={attachmentUrl}
            style={{objectFit: 'cover'}}
          />
        </div>
      )}

      {/* <div className='flex justify-between items-center rounded-b-2xk bg-white shadow-md text-gray-400 border-t'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbUp className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none'>
          <ChatAlt className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <Share className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div> */}
    </div>
  )
}

export default Post