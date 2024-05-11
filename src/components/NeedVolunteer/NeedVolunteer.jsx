import SectionHead from "../SectionHead/SectionHead";
import CardComponent from "../Card/Card";

export default function NeedVolunteer() {
  return (
    <div>
      <SectionHead>Where Your Help Needed</SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <CardComponent />
      </div>
    </div>
  );
}
