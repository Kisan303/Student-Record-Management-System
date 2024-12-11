import { Outlet } from "react-router-dom";
import NavbarUser from "./components/NavbarUser";
import Footer from "./components/Footer";

function User() {
  return (
    <div className="App">
      <NavbarUser />
      <div className="col-12 bg-primary-subtle text-primary-emphasis vh-100">
        <Outlet />
      </div>
    </div>
  );
}

export default User;