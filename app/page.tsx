"use client";

//lazy loading example
import dynamic from "next/dynamic";
import { useState } from "react";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <main>
      <h1>
        Hello World!!{" "}
        <button
          className="btn btn-success"
          onClick={() => {
            // //eslint-disable-next-line
            // (async () => {
            //   //lazy loading a library
            //   const user = [{ name: "v" }, { name: "a" }, { name: "g" }];

            //   //choosing just the default export of lodash
            //   const _ = (await import("lodash")).default;
            //   const sorted = _.orderBy(user, ["name"]);
            //   console.log(sorted);
            // })();

            //but both async and useState hook can't be used in same component as the async is for server and useState is for client
            //will get warning in the console for the above
            //eslint-disable-next-line
            setVisible(!visible);
          }}
        >
          Load Heavy
        </button>
        {/* {session ? (
          <span className="text-2xl text-sky-600">{session.user!.name}</span>
        ) : (
          "World!"
        )} */}
      </h1>
      {visible && <HeavyComponent />}
    </main>
  );
}
