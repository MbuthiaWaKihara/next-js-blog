import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/Date';

import { getSortedPostsData } from '../lib/posts';

const Home = ({allPostsData}) => {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! My name is Evans. I develop software. I use React.js, Node.js and Typescript as my main Tools.
          I like playing chess. I'm currently watching the 2015 hit drama/musical series Empire. It's awesome!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export default Home;

export const getStaticProps = async ( ) => {
  const allPostsData = getSortedPostsData();
  return ({
    props: {
      allPostsData,
    }
  })
}
