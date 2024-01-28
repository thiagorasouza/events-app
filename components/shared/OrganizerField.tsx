import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function OrganizerField() {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div>
      <div className="text-sm font-medium mb-1">Organizer:</div>
      <div className="flex gap-3 items-center bg-white p-2 rounded-md text-sm">
        {isLoaded ? (
          isSignedIn ? (
            <>
              <Image
                src={user.imageUrl}
                alt="profile image"
                className="rounded-full"
                width={24}
                height={24}
              />
              <span>{user.fullName}</span>
            </>
          ) : (
            <>
              <div className="rounded-full bg-gray-500 w-6 h-6"></div>
              <span>Unable to retrieve current user</span>
            </>
          )
        ) : (
          <>
            <div className="rounded-full bg-gray-500 w-6 h-6"></div>
            <span>Loading...</span>
          </>
        )}
      </div>
    </div>
  );
}

export default OrganizerField;
