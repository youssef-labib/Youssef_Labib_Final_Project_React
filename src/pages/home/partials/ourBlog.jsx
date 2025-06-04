import React from 'react';
import blogData from '../../../json/blog.json';

const OurBlog = () => {
    return (
        <>

            <section className="container mx-auto py-12">
                <div className="px-16">
                    <h2 className="text-2xl font-bold text-center uppercase mb-8">Our Blog</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {blogData.map((post) => (
                            <article key={post.id} className="bg-white max-w-[380px] mx-auto w-full">
                                <div className="w-full h-96 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="pt-4">
                                    <a
                                        href="#"
                                        className="text-[16px] font-bold text-gray-900 hover:text-[#e65540] transition-colors block mb-2"
                                    >
                                        {post.title}
                                    </a>

                                    <div className="text-[13px] text-gray-500 mb-3">
                                        by
                                        <span> {post.author} </span>
                                        on
                                        <span> {post.date}</span>
                                    </div>

                                    <p className="text-[13px] text-gray-600 leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default OurBlog;