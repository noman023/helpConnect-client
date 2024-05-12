import { Carousel } from "flowbite-react";

import cleaning from "../../assets/cleaning.jpg";
import volunteer from "../../assets/volunteer.jpg";
import volunteerMan from "../../assets/volunteer_man.jpg";

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-[500px] mt-5">
      <Carousel>
        {/* slide 1 */}
        <div className="relative">
          <img src={cleaning} className="w-full h-auto" alt="Slider Image 1" />

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4 text-green-400">
                Empower Your Community
              </h2>
              <p className="text-lg">
                Join us in making a difference. Volunteer today!
              </p>
            </div>
          </div>
        </div>

        {/* slide 2 */}
        <div className="relative">
          <img
            src={volunteer}
            alt="volunteer image"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4 text-green-400">
                Building a Better Tomorrow
              </h2>
              <p className="text-lg">
                Together, we can create positive change in our communities.
              </p>
            </div>
          </div>
        </div>

        {/* slide 3 */}
        <div className="relative">
          <img
            src={volunteerMan}
            alt="volunteer image"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4 text-green-400">
                Make a Difference Today
              </h2>
              <p className="text-lg">
                Find volunteer opportunities that match your passion and skills
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
