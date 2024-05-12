import { Button, Label, TextInput } from "flowbite-react";

export default function BeVolunteer({ closeModal, data }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    closeModal(false);

    const form = new FormData(e.currentTarget);
    const thumbnail = form.get("thumbnail");
    const title = form.get("title");
    const description = form.get("description");
    const category = form.get("category");
    const location = form.get("location");
    const deadline = form.get("deadline");
    const volunteer = form.get("volunteer");
    const name = form.get("name");
    const email = form.get("email");

    const volunteerName = form.get("volunteerName");
    const volunteerEmail = form.get("volunteerEmail");
    const suggestion = form.get("suggestion");
    const status = form.get("status");

    const postInfo = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteer,
      name,
      email,
      deadline,
      volunteerName,
      volunteerEmail,
      suggestion,
      status,
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 my-10 border-2 border-green-600 p-5 shadow-2xl rounded-2xl"
    >
      <div className="flex flex-col md:flex-row gap-5">
        {/* first row */}
        <div className="w-full space-y-3">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Thumbnail" value="Thumbnail" />
            </div>
            <TextInput
              defaultValue={data && data.thumbnail}
              id="Thumbnail"
              type="text"
              placeholder="Thumbnail image url"
              name="thumbnail"
              required
              readOnly
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Title" value="Title" />
            </div>
            <TextInput
              defaultValue={data && data.title}
              id="Title"
              type="text"
              name="title"
              placeholder="Post Title"
              required
              readOnly
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Description" value="Description" />
            </div>
            <TextInput
              defaultValue={data && data.description}
              id="Description"
              type="text"
              name="description"
              placeholder="Post Description"
              required
              readOnly
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Category" value="Category" />
            </div>
            <TextInput
              defaultValue={data && data.category}
              id="Category"
              type="text"
              name="category"
              placeholder="Category ex: healthcare, education, social service, animal welfare."
              required
              readOnly
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Location" value="Location" />
            </div>
            <TextInput
              defaultValue={data && data.location}
              id="Location"
              type="text"
              placeholder="ex: Mirpur, Dhaka"
              name="location"
              required
              readOnly
            />
          </div>
        </div>

        {/* second row */}
        <div className="w-full space-y-3">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Volunteer" value="Volunteer Need" />
            </div>
            <TextInput
              defaultValue={data && data.volunteersNeeded}
              id="Volunteer"
              type="text"
              name="volunteer"
              placeholder="Number of Volunteer Needed for your work"
              required
              readOnly
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Deadline" />
            </div>

            <TextInput
              defaultValue={data && data.volunteersNeeded}
              id="Deadline"
              type="text"
              name="deadline"
              placeholder="Deadline"
              required
              readOnly
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Name" value="Organizer Name" />
            </div>
            <TextInput
              defaultValue={data && data.organizer.name}
              id="Name"
              type="text"
              name="name"
              placeholder="Organizer Name"
              required
              readOnly
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Email" value="Organizer Email" />
            </div>
            <TextInput
              defaultValue={data && data.organizer.email}
              id="Email"
              type="text"
              name="email"
              placeholder="Organizer Email"
              required
              readOnly
            />
          </div>
        </div>
      </div>

      <hr />

      {/* volunteers input field */}
      <div className=" flex flex-col md:flex-row gap-5">
        <div className="w-full space-y-3">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="VolunteerName" value="Volunteer Name" />
            </div>
            <TextInput
              id="VolunteerName"
              type="text"
              name="volunteerName"
              placeholder="Volunteer Name"
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="VolunteerEmail" value="Volunteer Email" />
            </div>
            <TextInput
              id="VolunteerEmail"
              type="email"
              name="volunteerEmail"
              placeholder="Volunteer Email"
              required
            />
          </div>
        </div>

        <div className="w-full space-y-3">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Suggestion" value="Suggestion" />
            </div>
            <TextInput
              id="Suggestion"
              type="text"
              name="suggestion"
              placeholder="Feel free to give us any suggestion"
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="status" value="Status" />
            </div>
            <TextInput
              defaultValue="requested"
              id="status"
              type="text"
              name="status"
              required
              readOnly
            />
          </div>
        </div>
      </div>

      <Button type="submit" color={"success"} className="md:w-1/3 md:mx-auto">
        Request
      </Button>
    </form>
  );
}
