import styles from "../page.module.css";
import Image from "next/image"
import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <div className={styles.main}> 
           <div>
                <Image
                src="/Leaf.png"
                alt="Leaf logo"
                width={100}
                height={100}
                priority
                />
            </div>   
            <div>                
                <h1>oh no!</h1>
                <h1>There is no internet</h1>
                <h2>It&apos;s a good idea to have an offline page because I might not be precaching 
                    everything and you don&apos;t want your users to get stuck on a blank screen.
                    But this page needs some more work though!</h2>
            </div> 
            <div className={styles.grid}>
                <Link 
                href="/"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2>
                    go back <span>-&gt;</span>
                </h2>
                <p>Click here to go back to landing page</p>
                </Link>
            </div> 
        </div>
    )
}

export default NotFound 