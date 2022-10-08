import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/about-us">
        <a>About us</a>
      </Link>
    </div>
  );
};

export default Homepage;
