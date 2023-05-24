import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 text-white bg-[#1f2937]">
        <div>
          <h2 className="text-2xl font-bold">ZaRa</h2>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="p-4 footer-center text-white bg-neutral ">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
