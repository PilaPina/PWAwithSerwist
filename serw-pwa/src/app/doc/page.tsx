import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Doctor() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    This is the part where I talk about almost being sent to the insane asylum... 
                    <br/>
                    And how most of this time has been dealing with next.js errors, not PWA errors. 
                    <br/>
                    The PWA part was the easy part. 
                    <br/>
                </p>
                <Image
                    src="/Leaf.png"
                    alt="Leaf logo"
                    width={100}
                    height={100}
                    priority
                    />
            </div>
        <div className={styles.grid}>
        <Link 
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            go back<span>-&gt;</span>
          </h2>
          <p>This link will take you back to the landing page.</p>
        </Link>
      </div>
        </main>
    )
} 