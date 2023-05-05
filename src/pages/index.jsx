import Layout from "@/components/Layout"
import utilStyles from "../styles/utils.module.css"


export default function Home() {
  return (
    <Layout
     title='Home | Dialy expenses'
     description='Description to the homepage'
     home = {true}
    >
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nobasys.com" target="_blank" rel="noopener noreferrer">Nobasys || Desarrollo de Software</a>.)
        </p>
      </section>

    </Layout>
  )
}
