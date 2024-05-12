import { Card, Rating } from "flowbite-react";
import { motion } from "framer-motion";

import cleaning from "../../assets/cleaning.jpg";

export default function ReviewCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Card className="max-w-sm border-green-600">
        <div className="flex gap-7">
          <div>
            <img
              src={cleaning}
              alt="reviewer image"
              className="rounded-br-3xl w-20 h-20"
            />
          </div>

          <div className="text-gray-900 dark:text-white">
            <h5 className="text-2xl font-bold ">John Doe</h5>

            <p className="text-gray-400">Mirpur, Dhaka</p>
          </div>
        </div>

        <div className="flex justify-between font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem omnis
          libero vero officiis voluptatibus et laborum, nemo nostrum, nobis
          animi recusandae, itaque totam sint cumque sunt cum similique possimus
          error.
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
