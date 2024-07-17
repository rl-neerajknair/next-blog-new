import React from 'react';
import Link from 'next/link';

const Blogs = ({ blogs }) => {
    return (
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                    {blogs.data.map((blog) =>
                        <Link href={`/blog/${blog.id}`} key={blog.id}>
                            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                                <div className="p-8">
                                    <h3 className="font-bold 2xl my-1">{blog.attributes.blogTitle}</h3>
                                    <p className="text-gray-600 text-xl">{blog.attributes.blogDesc}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
