import Intro from "../IntroTextAnimation";
import ProfilePicture from "../ProfilePicture";

interface Props {
  screen: "lg" | "base";
}

const AboutPage = ({ screen }: Props) => {
  if (screen === "lg")
    return (
      <>
        <Intro />
        <ProfilePicture />
      </>
    );
  return (
    <>
      <ProfilePicture />
      <Intro />
    </>
  );
};

export default AboutPage;
