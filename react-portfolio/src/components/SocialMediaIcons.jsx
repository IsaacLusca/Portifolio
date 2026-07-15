import linkedinImg from "../assets/linkedin.png";
import instagramImg from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/isaaclusca/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinImg} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/isaaclusca/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagramImg} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
