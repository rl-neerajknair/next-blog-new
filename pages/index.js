import React from 'react';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useFetch from '../hooks/useFetch';
import Head from 'next/head';

const Homepage = () => {
    const { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <Head>
                <title>Blog Site</title>
            </Head>

            <Navbar />
            <Blogs blogs={data ? data : ""} />
            <Footer />
        </div>
    );
};

export default Homepage;
