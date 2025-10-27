import Image from "next/image";
import { IAuthor } from "./types";

function AuthorCard({ name, image }: IAuthor) {
  return (
    <div className="flex w-52 flex-col space-y-2 text-center">
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={name}
          width={208}
		  height={208}
          className="rounded-md object-cover grayscale transition-all hover:grayscale-0"
        />
      </div>
      <h2 className="font-creteRound text-2xl">{name}</h2>
      <p className="text-muted-foreground">
        <span className="font-bold text-white">04</span> Published posts
      </p>
    </div>
  );
}

export default AuthorCard;
