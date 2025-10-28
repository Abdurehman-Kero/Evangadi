import { useEffect } from "react";
import flag from "../../assets/images/icons/16.png";
import AccordionHandler from "../../AccordionHandler";
import styles from "./Footer.module.css";

export const Footer = () => {
  useEffect(() => {
    AccordionHandler(); // initialize accordion
  }, []);

  return (
    <footer className={`${styles.footerWrapper} ${styles.footerLinksWrapper}`}>
      <div className="container">
        {/* Upper Text */}
        <div className={styles.upperTextContainer}>
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro...
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              Customer Agreement
            </a>
            ...
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required...
            <a href="https://www.apple.com/promo/">terms</a> apply.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className={styles.footerLinksWrapper}>
          <div className={`${styles.linksWrapper} col-sm-12 col-md`}>
            <h3>
              Shop and Learn <span className={styles.icon}>+</span>
            </h3>
            <ul>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">HomePod</a>
              </li>
              <li>
                <a href="#">iPod touch</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.linksWrapper} col-sm-12 col-md`}>
            <h3>
              Services <span className={styles.icon}>+</span>
            </h3>
            <ul>
              <li>
                <a href="#">Apple Music</a>
              </li>
              <li>
                <a href="#">Apple News+</a>
              </li>
              <li>
                <a href="#">Apple TV+</a>
              </li>
              <li>
                <a href="#">Apple Arcade</a>
              </li>
              <li>
                <a href="#">Apple Card</a>
              </li>
              <li>
                <a href="#">iCloud</a>
              </li>
            </ul>
            <h3>
              Account <span className={styles.icon}>+</span>
            </h3>
            <ul>
              <li>
                <a href="#">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul>
          </div>

          {/* You can repeat the same structure for links-wrapper-3, 4, 5 */}
        </div>

        {/* Footer Bottom */}
        <div className={styles.myAppleWrapper}>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a>. Or call 1-800-MY-APPLE.
        </div>

        <div className={styles.copyrightWrapper}>
          <div>Copyright &copy; 2020 Apple Inc. All rights reserved.</div>
          <div className="footer-links-terms">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country">
            <div className={styles.flagWrapper}>
              <img src={flag} alt="Flag" />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
