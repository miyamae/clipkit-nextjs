import Link from 'next/link';
import Layout from '../../../components/layout';
import ClipkitClient from '../../../lib/clipkit-client';

export default function ShowArticle(props: any) {
  return (
    <Layout>
      <p>
        <Link href="/">Back</Link>
      </p>
      <article>
        <h1>{props.article.title}</h1>
        <ul>
          {props.items.map((item: any) => {
            return <li key={item.id}>{item.body}</li>;
          })}
        </ul>
      </article>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const clipkit = new ClipkitClient();
  const article = await clipkit.getArticle(context.params.id);
  const items = await clipkit.get({ url: article._links.items.href });
  return {
    props: { article, items },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const clipkit = new ClipkitClient();
  const articles = await clipkit.getArticles();
  const paths = articles.map((article: any) => ({
    params: { id: article.id.toString() },
  }));
  return { paths, fallback: false };
}
