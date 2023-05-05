import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function addexpenses() {
  return (
    <Layout title="Add | Dialy expenses" description="Add description">
      <Image
        src="/img/icon-red.png"
        width={400}
        height={400}
        alt="Logo Noba"
      ></Image>
      <Link legacyBehavior href="/">
        <a>Volver a inicio</a>
      </Link>
    </Layout>
  );
}


