type TopSectionProps = {
    url: string;
    heading1: string;
    heading2: string;
  };
  
export default function TopSection({ url, heading1, heading2 }: TopSectionProps) {
    return (
      <section className="relative w-full h-[96vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-center bg-cover filter brightness-75"
          style={{ backgroundImage: `url('${url}')` }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            {heading1}
          </h1>
          <hr className="w-20 border-t-4 border-primary mb-6 opacity-80" />
          <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
            {heading2}
          </p>
        </div>
      </section>
    );
}  