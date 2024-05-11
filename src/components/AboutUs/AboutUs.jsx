import volunteerImg from "../../assets/volunteer.jpg";

export default function AboutUs() {
  return (
    <div className="relative">
      <img
        src={volunteerImg}
        alt="volunteer photo"
        className="w-full h-[500px]"
      />

      {/* Overlay for mobile devices (hidden on md and above) */}
      <div className="absolute inset-0 bg-black opacity-50 md:hidden" />
      {/* Overlay for md and above (hidden on mobile devices) */}
      <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent md:block" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="z-10 text-left text-white p-8 relative md:w-1/2 md:ml-auto">
          <h2 className="text-3xl font-bold mb-5">
            Here's a bit <span className="text-green-500">about us.</span>
          </h2>

          <div className="text-gray-300 space-y-8 text-sm sm:text-base">
            <p>
              At HelpConnect, we are passionate about connecting volunteers with
              meaningful opportunities to make a positive impact in their
              communities. Our mission is to create a platform that empowers
              individuals and organizations to come together, share resources,
              and drive positive change.
            </p>

            <p>
              Join us in building a stronger, more connected community, one
              volunteer opportunity at a time. Together, we can make a
              difference and create a brighter future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
