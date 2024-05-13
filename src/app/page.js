import Image from "next/image";
import styles from "./page.module.css";
import Navigation from './nav.js'
import Introduction from "./About";
import Contact from "./contact";

export default function Main() {
  return (
    <div className="grid grid-cols-8 h-screen">
      {/* Navigation */}
      <div className="col-span-2 bg-gray-500 flex justify-center"  >
        <Navigation />
      </div>
      
      <div className="col-1">
          <Contact/>
      </div>

      {/* Introduction */}
      <div className="col-span-4 flex justify-center items-start m-2 p-2">
        <Introduction />
      </div>
    </div>
  );
}

