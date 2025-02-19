import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="flext flex-col px-9 py-9 md:px-56 lg:px-72">
      <div className="flex items-center justify-center gap-4 mb-5">
        <span className="text-white">
          <a href="https://github.com/amitkushh">
            <Github height={25} width={25} />
          </a>
        </span>
        <span className="text-white">
          <a href="https://x.com/amitkushh">
            <Twitter height={25} width={25} />
          </a>
        </span>
        <span className="text-white">
          <a href="https://www.linkedin.com/in/amitkushh/">
            <Linkedin height={25} width={25} />
          </a>
        </span>
      </div>
      <div>
        <p className="text-white text-center">© 2025 Developed with by Amit</p>
      </div>
    </div>
  );
}

export default Footer;
