import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pill}>hey there</div>
      <h1 className={styles.headline}>
        hi<span className={styles.cursor}>_</span>
      </h1>
      <p className={styles.subtitle}>
        you showed up, so this little Next.js app says hello right back.
      </p>
      <div className={styles.ctaRow}>
        <a className={styles.primaryButton} href="https://nextjs.org">
          explore next.js
        </a>
        <a className={styles.secondaryButton} href="https://vercel.com">
          deploy to vercel
        </a>
      </div>
    </main>
  );
}
