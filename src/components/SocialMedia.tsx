const SocialMedia = () => {
  return (
    <div>
        <h4 className="font-semibold">Follow Us:</h4>
        <div className="flex space-x-4">
          <a 
            href="https://skool.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full overflow-hidden transform transition-transform hover:scale-110"
          >
            <img
              src="/images/skool-logo.webp"
              alt="Skool"
              width={48}
              height={48}
              className="rounded-full"
            />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full overflow-hidden transform transition-transform hover:scale-110"
          >
            <img
              src="/images/youtube-logo.svg"
              alt="YouTube"
              width={48}
              height={48}
              className="rounded-full"
            />
          </a>
        </div>
    </div>
  );
};

export default SocialMedia;
