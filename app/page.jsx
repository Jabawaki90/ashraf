import TopNav from "./components/top-nav/top-nav";
import ProfileCard from "./components/utils/profile-card/profile-card";
import TechLogo from "./components/tech-logo/tech-logo";
import SliderContainer from "./components/utils/slider-container/slider-container";

const Home = () => {
  const left = `“ ... i self-taught all the way to become a software engineer
  reason being is i want to be part of the tech industry meaning 
  to be part of innovation...  ”`;

  return (
    <>
      <TopNav />
      <div className="main-page-container">
        <div className="user-info-container">
          <div className="child-container">
            <ProfileCard />
          </div>
        </div>
        <TechLogo />
      </div>
      <SliderContainer />
    </>
  );
};

export default Home;
