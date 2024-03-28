import React from "react";
import { auth, currentUser } from "@clerk/nextjs";

const page = async () => {
  // // Get the userId from auth() -- if null, the user is not signed in
  // const { userId } = auth();

  // if (userId) {
  //   // Query DB for user specific information or display assets only to signed in users
  // }

  // // Get the Backend API User object when you need access to the user's information
  // const user = await currentUser();
  // // Use `user` to render user details or create UI elements

  return <div>Dashboard</div>;
};

export default page;
