import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="flext flex-col px-9 py-9 md:px-56 lg:px-72">
      <div className="flex items-center gap-4">
        <span>
          <a href="https://github.com/amitkushh">
            <Github height={25} width={25} />
          </a>
        </span>
        <span>
          <a href="https://x.com/amitkushh">
            <Twitter height={25} width={25} />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/amitkushh/">
            <Linkedin height={25} width={25} />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
