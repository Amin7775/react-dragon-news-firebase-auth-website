import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="flex gap-4 bg-[#F3F3F3] py-2 px-3 mt-8">
      <p className="bg-[#D72050] px-3 py-2 text-white">Latest</p>
      <Marquee className="" pauseOnHover="true" speed={70}>
        <p className="text-lg font-medium text-[#403F3F]">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as Unfolds !
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
