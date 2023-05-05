import Layout from "@/components/Layout";
import Link from "next/link";

export default function index({data}) {
  return (
    <Layout>
      <h1>My dialy expenses</h1>
      {
        data.map(({id, name, email}) =>(
          <div key={id}>
            <h3>
              <Link legacyBehavior href={`/blog/${id}`} >
              <a>{id} - {name}</a>
              </Link>
            </h3>           
            <p>{email}</p>
          </div>
        ))
      }
    </Layout>
  );
}

export async function getStaticProps(){
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return{
      props:{
        data
      }
    }
  }catch(e){
    console.log(e)
  }
}
