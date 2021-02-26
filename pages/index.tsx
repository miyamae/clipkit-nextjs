import Link from 'next/link';
import Layout from '../components/layout';
import ClipkitClient from '../lib/clipkit-client';

export default function Home(props: any) {
  return (
    <Layout>
      <section>
        <ul>
          {props.articles.map((article: any) => {
            return (
              <li>
                <Link href={`articles/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const clipkit = new ClipkitClient();
  const articles = await clipkit.getArticles();
  return {
    props: { articles },
  };
}
