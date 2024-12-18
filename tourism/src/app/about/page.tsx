import styles from './abouts.module.css'; // Assuming you have CSS in a separate file
export default function AboutUs() {
  return (
    <div>
      <main className={styles.container}>
        <h1>About Us</h1>
        <p>Discover our story, mission, and values.</p>
        <div className={styles.content}>
        
          <div className={styles.textSection}>
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis id beatae. Reiciendis laborum cupiditate voluptas atque optio porro numquam! Dolores aperiam vel nesciunt! Odit odio voluptatem nisi porro illo!</p>

            <h2>Our Values</h2>
            <ul>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Satisfaction</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
}