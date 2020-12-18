import styles from "./footer.module.scss";


export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <section className="container">
        <div className="grid grid-2">
          <div className="item item-md-7">
            <div className="grid">
              <div className="item item-md-4">
                <h2>Site Map</h2>
                <nav><ul className={styles["footer-list"]}>
                  <li>Home</li>
                  <li>Bootcamp</li>
                  <li>Software Development</li>
                  <li>Courses</li>
                  <li>Custom Trainings</li>
                  <li>Blog</li>
                </ul></nav>
              </div>
              <div className="item item-md-4">
                <h2>Company</h2>
                <nav><ul className={styles["footer-list"]}>
                  <li>About Us </li>
                  <li>Career</li>
                  <li>Press Kit</li>
                  <li>FAQ</li>
                </ul></nav>
              </div>
              <div className="item item-md-4">
                <h2>Connect</h2>
                <nav><ul className={styles["footer-list"]}>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Linkedin</li>
                  <li>Youtube</li>
                </ul></nav>
              </div>
            </div>
          </div>
          <div className="item item-md-5">
            <div className="grid grid-4">
              <div className="item item-md-6">
                <h2>
                  Company Address
              </h2>
                <p>
                  Jln. Palagan Tentara Pelajar
                  Km. 9,8
                  Ngaglik, Kab. Sleman
                  DI Yogyakarta 55581
              </p>
              </div>
              <div className="item item-md-6">
                <h2>Contact</h2>
                <p>
                  marketing@refactory.id
                  +62 8122 8203 381
              </p>
                <p>
                  Dewita: 0857 2582 7222
                  Septin: 0878 2080 0206
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}