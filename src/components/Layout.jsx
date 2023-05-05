import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/Navbar"

const name= 'Conjunto Habitacional ';
const ped= '"El Pedregal"';


export default function Layout({ children, title, description, home }) {
  //console.log(home)
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {/* <h1>
        <Navbar/>
      </h1> */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/icon-red.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={utilStyles.heading2Xl}>{ped}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/icon-red.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
                {ped}
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
        <Link href="/">
          Inicio | 
        </Link>
        <Link href="/blog ">
          Blog | 
        </Link>
        <Link legacyBehavior href="/blog/addexpenses">
          <a> Add Expenses |</a>
        </Link>
        <Link legacyBehavior href="/blog/editexpen">
          <a> Edit Expen</a>
        </Link>
      </nav>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

Layout.defaultProps = {
  title: "My dialy expenses",
  description: "Description of my dialy expenses",
};
