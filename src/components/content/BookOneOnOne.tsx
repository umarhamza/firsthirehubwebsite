type Props = {
  sectionClass?: string;
};

const BookOneOnOne = ({ sectionClass = "" }: Props) => {
  return (
    <section className={`py-10 md:py-20 ${sectionClass}`} id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book a 1-to-1 30 Minute Meeting
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Are you ready to take the first step toward building your online
            business? Join <a href="https://www.linkedin.com/in/ismael-fraser-45045947/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Ismael Fraser</a> for a free 30-minute Q&A session where he'll share
            valuable insights, practical advice, and actionable strategies to
            help you launch and grow your online venture.
          </p>
          <a
            href="https://calendly.com/ismaelfraser47/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            📆 Book Your Free Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookOneOnOne;
