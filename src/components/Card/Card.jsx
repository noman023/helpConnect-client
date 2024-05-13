import { Button, Card } from "flowbite-react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function CardComponent({ data }) {
  const { thumbnail, title, category, deadline, _id } = data;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Card
        className="max-w-sm md:h-[450px]"
        imgAlt="Volunteer post image"
        renderImage={() => (
          <img
            src={thumbnail}
            alt="volunteer image"
            className="w-full max-h-60 "
          />
        )}
      >
        <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <div className="flex justify-between font-normal text-gray-700 dark:text-gray-400">
          <p>{category} work </p>
          <p>Deadline: {deadline}</p>
        </div>

        <Link to={`/postDetails/${_id}`}>
          <Button color="success">View Details</Button>
        </Link>
      </Card>
    </motion.div>
  );
}
