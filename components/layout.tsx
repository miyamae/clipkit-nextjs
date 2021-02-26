import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Clipkit Next';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{siteTitle}</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
