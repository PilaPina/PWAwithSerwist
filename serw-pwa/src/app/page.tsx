import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";



export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          This is my progressive web application. Usually referred to as a PWA. <br/> 
          They are not a website, not a desktop application and not an app. They are something in between. They can behave like an app, or a website, whichever you prefer.<br/> 
          <br/> You can install them in your browser and then they look like an app. <br/>
          PWA&apos;s improve user engagement. They are cost-effective in development. Are SEO optimized. 
          Responsive and fast, even on slow networks. And even offline. Yup. I said it. Offline. <br/> 
          And they are fully cross-platform, from any device, any browser and you do not need an app store!<br/><br/>
          Look up at your address bar and you&apos;ll see a little tetris block looking thing
          with a plus. Just click on it and follow instructions. 
        
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/512x512.svg"
          alt="Image of the fossils from animal crossing game"
          width={150}
          height={150}
          priority
        />
      </div>

{/* links for pages will be below */}

       <div className={styles.grid}>
        <Link href="/doc"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            One step at a time <span>-&gt;</span>
          </h2>
          <p>This was so hard in the beginning I thought I might need an appt with a doctor.
          I&apos;ve created this in Next.js and made it installable as a PWA. Next stop is offline and an API!
          </p>
        </Link>

        {/* <a
          // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Headscratcher <span>-&gt;</span>
          </h2>
          <p>It took me some time to find an up to date resource about PWA&apos;s. 
            But that&apos;s mainly because Next.js just updated to version 14 and docs have caught up yet.
            Plus Apple was until february being annoying about wanting to support service workers in iOs. 
            But it&apos;s all good now!
          </p>
        </a> */}

        <Link
          href="/weather"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            The Weather<span>-&gt;</span>
          </h2>
          <p>Here is my weather API.</p>
        </Link>

        {/* <Link
          href="/not-found"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            News! <span>-&gt;</span>
          </h2>
          <p>
            This WILL be my News API - but it&apos;s not connected yet. 
          </p>
        </Link> */}
      </div> 
    </main>
  );
}
