import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/ingridsgama/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/ingridgamaa96">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )

    
}