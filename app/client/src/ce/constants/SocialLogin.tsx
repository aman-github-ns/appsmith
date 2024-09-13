import {
  GoogleOAuthURL,
  GithubOAuthURL,
  SAPCDCOAuthURL,
} from "@appsmith/constants/ApiConstants";

import GithubLogo from "assets/images/Github.png";
import GoogleLogo from "assets/images/Google.png";
import SapCDCLogo from "assets/images/SAPCDC.png";
export interface SocialLoginButtonProps {
  url: string;
  name: string;
  logo: string;
  label?: string;
}

export const GoogleSocialLoginButtonProps: SocialLoginButtonProps = {
  url: GoogleOAuthURL,
  name: "Google",
  logo: GoogleLogo,
};

export const GithubSocialLoginButtonProps: SocialLoginButtonProps = {
  url: GithubOAuthURL,
  name: "Github",
  logo: GithubLogo,
};

export const SAPCDCSocialLoginButtonProps: SocialLoginButtonProps = {
  url: SAPCDCOAuthURL,
  name: "SAP CDC",
  logo: SapCDCLogo,
};

export const SocialLoginButtonPropsList: Record<
  string,
  SocialLoginButtonProps
> = {
  google: GoogleSocialLoginButtonProps,
  github: GithubSocialLoginButtonProps,
  sapcdc: SAPCDCSocialLoginButtonProps,
};

export type SocialLoginType = keyof typeof SocialLoginButtonPropsList;
