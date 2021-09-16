import * as React from "react";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { monitorPops } from "../popper";

export const Cookies = () => {
  useEffect(monitorPops, []);

  const onAccept = () => console.log(`onAccept`);
  return (
    <CookieConsent onAccept={onAccept} hideOnAccept={false} debug={true}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
