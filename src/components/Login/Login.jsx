import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    Swal.fire({
      icon: "success",
      title: "Logged in successfully",
    });
  };

  const handleGoogleLogin = () => {
    Swal.fire({
      icon: "success",
      title: "Logged in successfully",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 border-2 border-green-600 mx-auto my-10 p-5 rounded-xl shadow-2xl"
    >
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
          <Label htmlFor="password1" value="Your password" />
        </div>

        <TextInput
          id="password1"
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </div>

      <p className="mt-2 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-green-600 ">
          Resigter
        </Link>
      </p>

      <Button type="submit" color="success">
        Login
      </Button>

      <p className="text-lg text-black font-bold text-center">Or</p>
      <Button onClick={handleGoogleLogin} type="button" className="bg-red-600 ">
        Login with Google
      </Button>
    </form>
  );
}
