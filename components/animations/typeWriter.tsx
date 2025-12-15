import Typewriter from "typewriter-effect";

export default function AnimatedText() {
  return (
      <Typewriter
        
      options={{
        strings: [
          "Transforming Ideas",
          "Complex Thoughts ",
          "Into Reality.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
