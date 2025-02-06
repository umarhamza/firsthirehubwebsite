type SocialMediaLinks = {
  href: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const socialLinks: SocialMediaLinks[] = [
  {
    href: "https://www.skool.com/first-hire-hub-7163/about",
    src: "/images/skool-logo.webp",
    alt: "Join First Hire Hub Community on Skool",
    width: '90%'
  },
  {
    href: "https://www.youtube.com/@ismaelfraser47/playlists",
    src: "/images/youtube-logo.svg",
    alt: "Watch First Hire Hub business growth videos on YouTube",
    width: '90%'
  },
  {
    href: "https://www.linkedin.com/in/ismael-fraser-45045947/?originalSubdomain=uk",
    src: "/images/linkedin_icon.svg", 
    alt: "Connect with Ismael Fraser on LinkedIn",
  },
  {
    href: "https://www.trustpilot.com/review/firsthirehub.com",
    src: "/images/trustpilot_icon.svg",
    alt: "Read First Hire Hub reviews on Trustpilot",
    width: '75%'
  }
];

const SocialMedia = () => {
  return (
    <div>
      <h4 className="font-semibold">Follow Us:</h4>
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.alt}
            className="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden transform transition-transform hover:scale-110 shadow-md border border-gray-100 px-1 pt-1.5 pb-0.5"
          >
            <img
              src={link.src}
              alt={link.alt}
              width={link.width || '60%'}
              height={link.height || 'auto'}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
