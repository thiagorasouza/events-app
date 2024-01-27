import Image from "next/image";

function OrganizerField() {
  return (
    <div>
      <div className="text-sm font-medium mb-1">Organizer:</div>
      <div className="flex gap-3 items-center bg-white p-2 rounded-md text-sm">
        <Image
          src="https://source.unsplash.com/random/128x128/?profile"
          alt="profile image"
          className="rounded-full"
          width={24}
          height={24}
        />
        <span>Thiago Souza</span>
      </div>
    </div>
  );
}

export default OrganizerField;
