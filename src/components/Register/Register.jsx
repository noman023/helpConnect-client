import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export default function Register() {
  const [showPassowrd, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    //check if password has one uppercase and lowercase letter. and 6 letter long
    if (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      password.length >= 6
    ) {
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Password Making ",
        text: "Your password should have at least 1 uppercase and lowercase letter. And should be at least 6 character long.",
      });

      return;
    }

    createUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged in successfully",
        });

        // update user profile with name and photo url
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        });

        // navigate to home after register
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 border-2 border-green-600 mx-auto my-10 p-5 rounded-xl shadow-2xl"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Your name" />
        </div>

        <TextInput
          id="name1"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>

        <TextInput
          id="email1"
          type="email"
          name="email"
          placeholder="name@example.com"
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="photoUrl1" value="Your Photo Url" />
        </div>

        <TextInput
          id="photoUrl1"
          type="text"
          name="photoUrl"
          placeholder="photo url"
          required
        />
      </div>

      <div className="relative">
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>

        <TextInput
          id="password1"
          type={showPassowrd ? "text" : "password"}
          name="password"
          placeholder="password"
          required
        />

        {showPassowrd ? (
          <FaEye
            onClick={() => setShowPassword(!showPassowrd)}
            className="absolute right-2 bottom-3 text-xl cursor-pointer"
          />
        ) : (
          <FaEyeSlash
            onClick={() => setShowPassword(!showPassowrd)}
            className="absolute right-2 bottom-3 text-xl cursor-pointe"
          />
        )}
      </div>

      <p className="mt-2 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 ">
          Login
        </Link>
      </p>

      <Button type="submit" color="success">
        Register
      </Button>
    </form>
  );
}
