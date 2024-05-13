import Image from "next/image";
import styles from "./page.module.css";
import Navigation from './nav.js'
import Introduction from "./About";

export default function Main() {
  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Navigation */}
      <div className="col-span-1">
        <Navigation />
      </div>
      
      {/* Introduction */}
      <div className="col-span-2 flex justify-center items-start m-2 p-2">
        <Introduction />
      </div>
    </div>
  );
}

