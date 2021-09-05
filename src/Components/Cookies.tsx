import * as React from "react";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";

export const Cookies = () => {
  const outlineAddedElement = (node: Node) => {
    if (node.nodeName === "#text") {
      return;
    }
    const element = node.firstChild?.parentElement;
    console.log(`New element added:`, element);
    element!.style.outline = "2px solid red";
  };

  const processMutation = (mutation: MutationRecord) => {
    console.log(`Mutation detected`, mutation);
    switch (mutation.type) {
      case "childList":
        mutation.addedNodes.forEach(outlineAddedElement);
        break;
      case "attributes":
        break;
    }
  };

  useEffect(() => {
    const observer = new MutationObserver((mutationList) => {
      mutationList.forEach(processMutation);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeOldValue: true,
      childList: true,
      characterData: false,
      subtree: true,
    });
  }, []);

  const onAccept = () => console.log(`onAccept`);
  return (
    <CookieConsent onAccept={onAccept} hideOnAccept={false} debug={true}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
