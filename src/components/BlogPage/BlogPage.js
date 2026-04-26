import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import BlogSection from './BlogSection'

function BlogPage() {
    return (
        <div className='BlogPage_main'>
            <InnerHeader
                Heading="Blog"
            />
            <BlogSection />
        </div>
    )
}

export default BlogPage