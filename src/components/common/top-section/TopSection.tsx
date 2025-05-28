type TopSectionProps = {
  url: string;
  heading1: string;
  heading2: string;
};

export default function TopSection({ url, heading1, heading2 }: TopSectionProps) {
  return (
    <section className="relative w-full h-[96vh] bg-gray-900">
      <div
        className="absolute inset-0 bg-center bg-cover filter brightness-75 transition-transform duration-700 ease-in-out hover:scale-105"
        style={{ backgroundImage: `url('${url}')` }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
        <h1
          tabIndex={0}
          className={`
            text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg
            opacity-0 translate-y-8 animate-fadeSlideIn
            hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer
          `}
        >
          {heading1}
        </h1>
        <hr className="w-20 border-t-4 border-primary mt-10 opacity-80" />
        <p
          className={`
            text-lg md:text-xl max-w-xl drop-shadow-md
            opacity-0 translate-y-8 animate-fadeSlideIn animation-delay-300
          `}
        >
          {heading2}
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(32px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlideIn {
          animation-name: fadeSlideIn;
          animation-fill-mode: forwards;
          animation-duration: 0.8s;
          animation-timing-function: ease-in-out;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}