import { useQuery } from "@tanstack/react-query";

import SectionHead from "../SectionHead/SectionHead";
import ReviewCard from "./ReviewCard";
import SpinnerComponent from "../Spinner/Spinner";
import axios from "axios";
import baseUrl from "../../baseUrl";

export default function Reviews() {
  const { data, isPending } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/reviews`);

      return res.data;
    },
  });

  return (
    <>
      <SectionHead>What They're Talking About Us</SectionHead>

      {isPending ? (
        <SpinnerComponent />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {data.map((review, idx) => (
            <ReviewCard data={review} key={idx} />
          ))}
        </div>
      )}
    </>
  );
}
