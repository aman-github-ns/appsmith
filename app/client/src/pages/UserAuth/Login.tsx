import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import type { InjectedFormProps, DecoratedFormProps } from "redux-form";
import { reduxForm, formValueSelector, isDirty } from "redux-form";
import {
  LOGIN_FORM_NAME,
  LOGIN_FORM_EMAIL_FIELD_NAME,
  LOGIN_FORM_PASSWORD_FIELD_NAME,
} from "@appsmith/constants/forms";
import { FORGOT_PASSWORD_URL, SETUP, SIGN_UP_URL } from "constants/routes";
import {
  LOGIN_PAGE_INVALID_CREDS_FORGOT_PASSWORD_LINK,
  NEW_TO_APPSMITH,
  createMessage,
} from "@appsmith/constants/messages";
import { isEmptyString } from "utils/formhelpers";
import type { LoginFormValues } from "pages/UserAuth/helpers";

import { LOGIN_SUBMIT_PATH } from "@appsmith/constants/ApiConstants";
import { getIsSafeRedirectURL } from "utils/helpers";
import { getCurrentUser } from "selectors/usersSelectors";
import {
  getThirdPartyAuths,
  getIsFormLoginEnabled,
  getTenantConfig,
} from "@appsmith/selectors/tenantSelectors";
import { useFeatureFlag } from "utils/hooks/useFeatureFlag";
import { FEATURE_FLAG } from "@appsmith/entities/FeatureFlag";
import { getHTMLPageTitle } from "@appsmith/utils/BusinessFeatures/brandingPageHelpers";

// const validate = (values: LoginFormValues, props: ValidateProps) => {
//   const errors: LoginFormValues = {};
//   const email = values[LOGIN_FORM_EMAIL_FIELD_NAME] || "";
//   const password = values[LOGIN_FORM_PASSWORD_FIELD_NAME];
//   const { isPasswordFieldDirty, touch } = props;
//   if (!password || isEmptyString(password)) {
//     isPasswordFieldDirty && touch?.(LOGIN_FORM_PASSWORD_FIELD_NAME);
//     errors[LOGIN_FORM_PASSWORD_FIELD_NAME] = createMessage(
//       FORM_VALIDATION_EMPTY_PASSWORD,
//     );
//   }
//   if (!isEmptyString(email) && !isEmail(email)) {
//     touch?.(LOGIN_FORM_EMAIL_FIELD_NAME);
//     errors[LOGIN_FORM_EMAIL_FIELD_NAME] = createMessage(
//       FORM_VALIDATION_INVALID_EMAIL,
//     );
//   }

//   return errors;
// };

type LoginFormProps = {
  emailValue: string;
} & InjectedFormProps<LoginFormValues, { emailValue: string }>;

// type ValidateProps = {
//   isPasswordFieldDirty?: boolean;
// } & DecoratedFormProps<
//   LoginFormValues,
//   { emailValue: string; isPasswordFieldDirty?: boolean }
// >;

export function Login(props: LoginFormProps) {
  const { emailValue: email, error, valid } = props;
  const isFormValid = valid && email && !isEmptyString(email);
  const location = useLocation();
  const isFormLoginEnabled = useSelector(getIsFormLoginEnabled);
  const socialLoginList = useSelector(getThirdPartyAuths);
  const queryParams = new URLSearchParams(location.search);
  const isBrandingEnabled = useFeatureFlag(
    FEATURE_FLAG.license_branding_enabled,
  );
  const tentantConfig = useSelector(getTenantConfig);
  const { instanceName } = tentantConfig;
  let showError = false;
  let errorMessage = "";
  const currentUser = useSelector(getCurrentUser);
  if (currentUser?.emptyInstance) {
    return <Redirect to={SETUP} />;
  }
  if (queryParams.get("error")) {
    errorMessage = queryParams.get("message") || queryParams.get("error") || "";
    showError = true;
  }
  let loginURL = "/api/v1/" + LOGIN_SUBMIT_PATH;
  let signupURL = SIGN_UP_URL;
  const redirectUrl = queryParams.get("redirectUrl");
  if (redirectUrl != null && getIsSafeRedirectURL(redirectUrl)) {
    const encodedRedirectUrl = encodeURIComponent(redirectUrl);
    loginURL += `?redirectUrl=${encodedRedirectUrl}`;
    signupURL += `?redirectUrl=${encodedRedirectUrl}`;
  }

  let forgotPasswordURL = `${FORGOT_PASSWORD_URL}`;
  if (props.emailValue && !isEmptyString(props.emailValue)) {
    forgotPasswordURL += `?email=${props.emailValue}`;
  }

  // const footerSection = isFormLoginEnabled && (
  //   <div className="px-2 flex align-center justify-center text-center text-[color:var(--ads-v2\-color-fg)] text-[14px]">
  //     {createMessage(NEW_TO_APPSMITH)}&nbsp;
  //     <Link
  //       className="t--sign-up t--signup-link"
  //       kind="primary"
  //       target="_self"
  //       to={signupURL}
  //     >
  //       {createMessage(LOGIN_PAGE_SIGN_UP_LINK_TEXT)}
  //     </Link>
  //   </div>
  // );

  return (
    <></>
  );
}

const selector = formValueSelector(LOGIN_FORM_NAME);
export default connect((state) => ({
  emailValue: selector(state, LOGIN_FORM_EMAIL_FIELD_NAME),
  isPasswordFieldDirty: isDirty(LOGIN_FORM_NAME)(
    state,
    LOGIN_FORM_PASSWORD_FIELD_NAME,
  ),
}))(
  reduxForm<LoginFormValues, { emailValue: string }>({
    touchOnBlur: false,
    form: LOGIN_FORM_NAME,
  })(Login),
);
