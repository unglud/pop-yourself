import * as React from "react";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";

export const Cookies = () => {
  let max = 3;
  const showDiff = () => {
    const node = document.body.cloneNode(true);
    console.log(node);

    max--;
    if (max) {
      setTimeout(showDiff, 1000);
    }
  };

  useEffect(showDiff);

  const onAccept = () => console.log(`onAccept`);
  return (
    <CookieConsent onAccept={onAccept} hideOnAccept={false} debug={true}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
