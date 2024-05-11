import SectionHead from "../SectionHead/SectionHead";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <>
      <SectionHead>What They're Talking About Us</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <ReviewCard />
      </div>
    </>
  );
}
