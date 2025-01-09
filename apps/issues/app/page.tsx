import styles from "./page.module.css";
import {testParams} from "@/app/constants/test";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <span>build test</span>
      {testParams.map(({id,title})=>{
        return <Link href={`/${id}/${title}`}>{title}</Link>
      })}
    </div>
  );
}
