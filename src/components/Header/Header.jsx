import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import userImg from "../../assets/user.png";

export default function Header() {
  const user = true;

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Help<span className="text-green-500">Connect</span>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={userImg} rounded />}
        >
          {user && (
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
          )}

          {user && (
            <>
              <Dropdown.Item>Add Volunteer Post</Dropdown.Item>
              <Dropdown.Item>Manage My Post</Dropdown.Item>
            </>
          )}

          <Dropdown.Divider />

          {user ? (
            <Dropdown.Item>Sign out</Dropdown.Item>
          ) : (
            <Link to={"/login"}>
              <Dropdown.Item>Sign In</Dropdown.Item>
            </Link>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/allPost">All Posts</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
