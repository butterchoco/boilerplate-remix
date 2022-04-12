import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Report } from "tabler-icons-react";
import Button from "../atoms/Button";

type NavigationsType = {
  icon: JSX.Element;
  label: string;
}[];

const DashboardLayout: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const navigations: NavigationsType = [
    { icon: <Home />, label: "Beranda" },
    { icon: <Report />, label: "Booking Show" },
  ];

  return (
    <div className="flex w-screen h-screen bg-gray-50">
      <div className={`${isOpen ? "w-64" : "w-28"} p-4 transition-all`}>
        <div className="h-full rounded-xl shadow-lg bg-white relative">
          <Button
            colorScheme="primary"
            extraStyle="w-8 h-8 absolute bottom-8 -right-4 flex items-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            {!isOpen ? <ChevronRight /> : <ChevronLeft />}
          </Button>
          <div className="h-full max-h-[50%] flex flex-col items-center py-2 px-2 gap-2">
            {navigations.map((data, index) => (
              <Button
                key={index}
                variants="ghosted"
                extraStyle="w-full flex justify-start items-center pl-3 h-14 gap-2 overflow-x-hidden"
              >
                <span className="min-w-6 min-h-6 mx-2">{data.icon}</span>
                <p
                  className={`${
                    isOpen
                      ? "opacity-100 translate-x-0 delay-200"
                      : "opacity-0 translate-x-10"
                  } transition-all whitespace-nowrap`}
                >
                  {data.label}
                </p>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "flex-grow" : "w-3/4"} p-10`}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
