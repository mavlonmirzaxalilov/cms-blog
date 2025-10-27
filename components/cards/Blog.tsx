import { IBlog } from "@/types";
import { CalendarDays, Clock, Dot, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from '../ui/badge'

const BlogCard = (blog: IBlog) => {
  return (
    <Link href={"/"} className="group grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="relative rounded-md bg-secondary">
        <Image
          src={blog.image}
          alt={blog.title}
          width={650}
          height={335}
          className="-translate-y-6 rounded-md object-cover px-2 grayscale transition-all group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7"
        />
      </div>
      <div className="flex flex-col space-y-4">
        {/* Time Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            <p>{blog.date}</p>
          </div>
          <Minus />
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <p>01</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-creteRound text-3xl transition-colors group-hover:text-blue-500 max-md:text-2xl">
          {blog.title}
        </h2>
        <p className="line-clamp-3 text-muted-foreground">{blog.description}</p>

        {/* Authors */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={'/author/chris-impey.jpg'}
              alt={blog.title}
              width={30}
              height={30}
              className="rounded-sm object-cover"
            />
			<p>by {blog.author}</p>
          </div>
		  <Dot/>
		  <div className="flex items-center gap-2">
			<Badge variant={'secondary'}>ML</Badge>
		  </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
