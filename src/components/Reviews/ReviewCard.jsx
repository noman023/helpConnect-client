import { Card, Rating } from "flowbite-react";
import { motion } from "framer-motion";

export default function ReviewCard({ data }) {
  const { userImage, userName, address, review } = data;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Card className="max-w-sm md:h-[300px] border-green-600">
        <div className="flex gap-7">
          <div>
            <img
              src={userImage}
              alt="reviewer image"
              className="rounded-br-3xl w-20 h-20"
            />
          </div>

          <div className="text-gray-900 dark:text-white">
            <h5 className="text-2xl font-bold ">{userName}</h5>

            <p className="text-gray-400">{address}</p>
          </div>
        </div>

        <div className="flex justify-between font-normal text-gray-700 dark:text-gray-400">
          {review}
        </div>

        <div>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
          </Rating>
        </div>
      </Card>
    </motion.div>
  );
}
