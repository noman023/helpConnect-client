import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import userImg from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import SpinnerComponent from "../Spinner/Spinner";
import Swal from "sweetalert2";

export default function Header() {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "LogOut successfully",
        })
      )
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Help<span className="text-green-600">Connect</span>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            loading ? (
              <SpinnerComponent />
            ) : (
              <Avatar
                alt="User settings"
                img={user?.photoURL ? `${user.photoURL}` : userImg}
                rounded
              />
            )
          }
        >
          {user && (
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
          )}

          {user && (
            <>
              <Link to={"/addPost"}>
                <Dropdown.Item>Add Volunteer Post</Dropdown.Item>
              </Link>

              <Link to={"/myPosts"}>
                <Dropdown.Item>Manage My Post</Dropdown.Item>
              </Link>

              <Link to={"/myRequests"}>
                <Dropdown.Item> My Volunteer Request Post</Dropdown.Item>
              </Link>
            </>
          )}

          <Dropdown.Divider />

          {user ? (
            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
          ) : (
            <Link to={"/login"}>
              <Dropdown.Item>Login</Dropdown.Item>
            </Link>
          )}
        </Dropdown>

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/allPost">Need Volunteer Posts</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
