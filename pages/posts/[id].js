import Head from 'next/head';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css';

const Posts = ({postData}) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export default Posts;

export const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return ({
        paths,
        fallback: false,
    })
}

export const getStaticProps = async ({params}) => {
    const postData = await getPostData(params.id);
    return ({
        props: {
            postData,
        }
    })
}