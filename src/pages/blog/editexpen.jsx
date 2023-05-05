import Layout from "@/components/Layout";
import Link from "next/link";

export default function editexpen() {
  return (
    <Layout title="Edit | Dialy expenses" description="Add description">
      Edit expen&nbsp;
      <Link legacyBehavior href="/">
        <a>Volver a inicio</a>
      </Link>
    </Layout>
  );
}
