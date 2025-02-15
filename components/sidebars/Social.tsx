import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="blog-details-social">
      <ul className="list-wrap">
        <li>
          <a
            href="https://facebook.com/dialogika.co"
            target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ width: 12 }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/dialogika_co"
            target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ width: 15 }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/company/dialogika"
            target="__blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ width: 15 }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://tiktok.com/@dialogika.co"
            target="__blank">
            <FontAwesomeIcon
              icon={faTiktok}
              style={{ width: 15 }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/dialogika.co"
            target="__blank">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ width: 15 }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
