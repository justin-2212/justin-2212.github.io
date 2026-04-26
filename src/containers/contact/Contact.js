import React, {useContext, useState, useEffect} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [githubProfile, setGithubProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        // Extract username from GitHub URL
        const githubUrl = socialMediaLinks.github;
        const username = githubUrl.split("/").pop();

        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setGithubProfile(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProfile();
  }, []);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number.replace(/[^\d+]/g, "")}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {!loading && githubProfile ? (
              <img
                alt={githubProfile.name || githubProfile.login}
                src={githubProfile.avatar_url}
                className="github-avatar"
              />
            ) : (
              <>
                {illustration.animated ? (
                  <DisplayLottie animationData={email} />
                ) : (
                  <img
                    alt="Man working"
                    src={require("../../assets/images/contactMailDark.svg")}
                  ></img>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
