// "use client";
// import { config } from "@/config";
// import { Rss } from "lucide-react";
// import Link from "next/link";
// import { FunctionComponent } from "react";
// import { DarkModeToggle } from "./DarkModeToggle";
// import { Button } from "./ui/button";


import {config} from "@/config";
import Link from "next/link";
import {FunctionComponent} from "react";

// export const Footer: FunctionComponent = () => {
//   return (
//     <section className="mt-8 md:mt-16 mb-12 bg-blue-900 text-white">
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-muted-foreground">
//           © {config.name.copyright} {new Date().getFullYear()}
//         </div>
//         <div className="text-xs text-muted-foreground hidden lg:block">
//           <Link
//             href={`${config.baseUrl}`}
//           >
//             More text
//           </Link>
//         </div>
//         <div>
//           <Link href="/rss">
//             <Button variant="ghost" className="p-2">
//               <Rss className="w-4 h-4" />
//             </Button>
//           </Link>
//           <DarkModeToggle />
//         </div>
//       </div>
//       <div className="text-xs text-muted-foreground lg:hidden">
//         <Link
//           href={`${config.baseUrl}`}
//         >
//           SOME MORE TEXT
//         </Link>
//       </div>
//     </section>
//   );
// };



export const Footer: FunctionComponent = () => {
  return (
    <footer className="mt-8 md:mt-16 bg-blue-900 text-white font-semibold p-8 lg:p-8">
      <div className="flex flex-1 items-center justify-around font-serif">
        <div className="text-sm ">
          {config.name.name} ©  {new Date().getFullYear()}
        </div>
        <div className="text-xs hidden lg:block">
          <Link
            href={`/`}
          >
            Apply Now
          </Link>
        </div>

      </div>

    </footer>
  );
};