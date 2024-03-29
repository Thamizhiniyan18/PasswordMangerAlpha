import Password from "@/components/Password";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getPasswords } from "@/lib/fetchData";
import { extendedPasswordType } from "@/lib/typeDefinitions";
import PasswordDetails from "@/components/PasswordDetails";

type Props = {
  searchParams: {
    id: string;
  };
};

const page = async ({ searchParams }: Props) => {
  const PASSWORDS: extendedPasswordType[] = await getPasswords();

  const details: "" | extendedPasswordType | undefined =
    searchParams.id &&
    PASSWORDS.find((password) => password._id === searchParams.id);

  return (
    <div className="w-full h-full flex justify-between">
      <ScrollArea className="h-full w-full rounded-xl border p-2 lg:w-[49%]">
        {PASSWORDS.map((password) => (
          <Password
            key={password._id}
            _id={password._id}
            account_description={password.account_description}
            user_id={password.user_id}
            username={password.username}
            password={password.password}
            password_score={password.password_score}
            url={password.url}
            createdAt={password.createdAt}
            updatedAt={password.updatedAt}
          />
        ))}
      </ScrollArea>

      {details ? (
        <PasswordDetails details={details as extendedPasswordType} />
      ) : (
        <div className="hidden h-full w-full rounded-xl border p-2 lg:flex justify-center items-center lg:w-[49%]">
          <p>Select a Password to display its Details.</p>
        </div>
      )}
      
    </div>
  );
};

export default page;
