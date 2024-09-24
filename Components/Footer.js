import { SiWhatsapp, SiGithub, SiTelegram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="absolute w-full -bottom-0">
      <div className="bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-50 text-sm text-center sm:text-left">
            © {year} Blog —
            <a
              href="https://linkedin.com/in/alielesawy"
              rel="noopener noreferrer"
              className="text-gray-50 ml-1"
              target="_blank"
            >
              @ Ali Esmail
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="text-gray-50"
              href="https://api.whatsapp.com/send/?phone=%2B201555344220&text&type=phone_number&app_absent=0"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiWhatsapp />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://github.com/alielesawy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://t.me/alielesawy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiTelegram />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://www.linkedin.com/in/alielesawy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
