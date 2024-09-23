import Link from "next/link";

export default function Homepage() {
  return (
    <div>
     <br/><br/> <h1>Welcome to School Management App</h1>
     <br/><br/> <Link href={"/admin"}>goto admin page</Link>
     <br/><br/> <Link href={"/student"}>goto student page</Link>
     <br/><br/> <Link href={"/parent"}>goto parent page</Link>
     <br/><br/> <Link href={"/teacher"}>goto teacher page</Link>
     <br/><br/> <Link href={"/sign-in"}>goto sign-in page</Link>
    </div>
  );
}
