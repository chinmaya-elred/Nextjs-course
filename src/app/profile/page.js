"use client"; 
import React from "react";
import { useRouter } from 'next/navigation'

// export const metadata = {
//   title: "This is profile",
//   description: "Profile description is added",
// };

function index() {
  const router = useRouter()
  return (
    <div style={{ backgroundColor: "red" }}>
      profile
      <button onClick={() => router.push("/about")}>
        Click here to read more
      </button>
    </div>
  );
}

export default index;
