import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const ScrollArrows = ({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<null>;
}) => {
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -550, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 550, behavior: "smooth" });
    }
  };
  return (
    <>
      <ArrowLeftIcon
        onClick={scrollLeft}
        className="absolute left-20 top-1/2 -translate-y-1/2 w-12 h-12 text-white bg-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-400 transition-colors"
      />
      <ArrowRightIcon
        onClick={scrollRight}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-12 h-12 text-white bg-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-400 transition-colors"
      />
    </>
  );
};
