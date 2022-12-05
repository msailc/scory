import React from 'react'
import placeholder from '../public/placeholder.png'

const DashboardNews = () => {

  const posts = [
    {
        title: "TITLE 1",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "TITLE 2",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "rhat a reader will be distracted by the readable content"
    },
    {
        title: "TITLE 3",
        img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
        content: "react tailwind css card with image It is a long established fact that aable content"
    },
    {
      title: "TITLE 4",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "react tailwind css card with image It is a long established fact that aable content"
  },
];

  return (
    <div className='lg:ml-64 mt-8'>
        <div className="grid gap-2 lg:grid-cols-3">
                {posts.map((items, key) => (
                    <div className=" bg-white" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default DashboardNews