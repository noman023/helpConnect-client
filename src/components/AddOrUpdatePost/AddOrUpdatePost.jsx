import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

import { CiCalendarDate } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddOrUpdatePost({ closeModal, data }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    // close modal func will be there when updating data instead of adding a new one
    if (closeModal) {
      closeModal(false);
    }

    const form = new FormData(e.currentTarget);
    const thumbnail = form.get("thumbnail");
    const title = form.get("title");
    const description = form.get("description");
    const category = form.get("category");
    const location = form.get("location");

    const volunteer = form.get("volunteer");
    const name = form.get("name");
    const email = form.get("email");

    const postInfo = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteer,
      name,
      email,
      deadline: startDate,
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 my-10 border-2 border-green-600 p-5 shadow-2xl rounded-2xl"
    >
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full space-y-3">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Thumbnail" value="Thumbnail" />
            </div>
            <TextInput
              defaultValue={data && data.thumbnail} //data will be there when this component used for updating data
              id="Thumbnail"
              type="text"
              placeholder="Thumbnail image url"
              name="thumbnail"
              required
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
            />
          </div>
        </div>

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
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Deadline" />
            </div>

            <DatePicker
              selected={data ? data.deadline : startDate}
              showIcon
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              isClearable
              icon={<CiCalendarDate />}
              className="rounded-lg"
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
            />
          </div>
        </div>
      </div>

      {/* if there are data then show update else Add */}
      <Button type="submit" color={"success"} className="md:w-1/3 md:mx-auto">
        {data ? "Update" : "Add"} Post
      </Button>
    </form>
  );
}
