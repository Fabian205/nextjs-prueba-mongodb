import Layout from "@/components/Layout";

export default function users({data}) {
  return (
    <Layout>
      <h1>{data.id} - {data.name}</h1>
      <p>Address: </p>
      <p>Street: {data.address.street}</p>
      <p>Suite: {data.address.suite}</p>
      <p>City: {data.address.city}</p>
      <p>Zipcode: {data.address.zipcode}</p>
    </Layout>
  )
}

export async function getStaticPaths(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(({id})=>({params: {id:`${id}`}}))
    return{
      paths,
      fallback:false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({params}){
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
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