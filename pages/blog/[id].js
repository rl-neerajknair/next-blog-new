import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';
import useFetch from '../../hooks/useFetch';
import { useRouter } from 'next/router';

const BlogContentPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <Navbar />
            <BlogContent blogs={data} />
            <Footer />
        </div>
    );
};

export default BlogContentPage;
