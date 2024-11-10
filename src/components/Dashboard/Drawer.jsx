import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div className=" text-right  ">
        <button onClick={openDrawer} className=" w-[21px] mt-[9px]  ">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 17 14">
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"></path>
          </svg>
        </button>
      </div>
      <Drawer open={open} onClose={closeDrawer} className=" w-[200px] ">
        <div className="absolute right-[4px] z-[1000] ">
          <IconButton variant="text" color="white" onClick={closeDrawer}>
            {/* <XMarkIcon strokeWidth={2} className="h-5 w-5" /> */}
          </IconButton>
        </div>
        <Sidebar />
      </Drawer>
    </React.Fragment>
  );
}
