import styles from './page.module.css'; // Import the CSS module
// import Video from 'next-video';
// import video2 from '../../videos/1321208-uhd_3840_2160_30fps.mp4';
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.videoContainer}>
          {/* <Video src={video2} autoPlay muted loop controls={false} /> */}
          <div className={styles.overlay}>
             <h1> welcome here</h1>
          </div>
        </div>
      </main>
    </div>
  );
}