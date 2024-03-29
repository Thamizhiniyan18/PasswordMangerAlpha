import passwordModel from "../db/passwordModel";
import { unstable_noStore } from "next/cache";
import dbConnect from "../db/db-connect";
import {
  extendedPasswordType,
  passwordType,
  searchPasswordType,
} from "./typeDefinitions";
import mongoose from "mongoose";
import { auth, currentUser } from "@clerk/nextjs";

export const getPassword = async (id: string) => {
  unstable_noStore();
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  const { userId } = auth();

  if (isValidId) {
    try {
      const password = await passwordModel.find({user_id: userId, _id: id}).lean().exec();

      const reducedPassword: passwordType = {
        account_description: password[0].account_description,
        password_score: password[0].password_score,
        url: password[0].url,
        user_id: password[0].user_id,
        username: password[0].username,
        password: password[0].password,
      };

      return reducedPassword;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get password details to edit.");
    }
  } else {
    throw new Error("Invalid Password ID.");
  }
};

export const getPasswords = async () => {
  unstable_noStore();

  const { userId } = auth();

  try {
    await dbConnect();
    const fetchedPasswords = await passwordModel.find({user_id: userId}).lean().exec();
    const reducedPasswords: extendedPasswordType[] = fetchedPasswords.map(
      (password) => ({
        _id: `${password._id}`,
        account_description: password.account_description,
        user_id: password.user_id,
        username: password.username,
        password: password.password,
        password_score: password.password_score,
        url: password.url,
        createdAt: password.createdAt.toLocaleDateString(),
        updatedAt: password.updatedAt.toLocaleDateString(),
      })
    );

    return reducedPasswords;
  } catch (error) {
    console.log("Database Error", error);
    throw new Error("Failed to Fetch the Data");
  }
};

export const getPasswordsSearch = async () => {
  unstable_noStore();

  const { userId } = auth();

  try {
    await dbConnect();
    const fetchedPasswords = await passwordModel.find({user_id: userId}).lean().exec();
    const reducedPasswords: searchPasswordType[] = fetchedPasswords.map(
      (password) => ({
        id: `${password._id}`,
        account_description: password.account_description,
      })
    );

    return reducedPasswords;
  } catch (error) {
    console.log("Database Error", error);
    throw new Error("Failed to Fetch the Data");
  }
};
