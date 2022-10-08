import { Button } from "../src/components/atoms/Button";

const Homepage = () => {
  return (
    <div>
      <Button onClick={() => alert("Hi!")} text="Click me!" />
    </div>
  );
};

export default Homepage;
