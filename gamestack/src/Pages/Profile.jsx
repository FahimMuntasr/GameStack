import { useState, useEffect } from "react";
import FootNote from "../Components/FootNote";
import NavBarMain from "../Components/NavBarMain";

export default function Profile() {
  return (
    <>
      <NavBarMain />

      <div className="min-h-screen flex flex-col items-center justify-center text-white py-8"></div>

      <FootNote />
    </>
  );
}
