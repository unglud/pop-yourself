(async () => {
  // settings
  await chrome.action.setBadgeBackgroundColor({ color: "green" });

  // main
  chrome.action.onClicked.addListener(async (tab) => {
    await chrome.action.setBadgeText({ text: "1", tabId: tab.id });
  });

  console.log(`unglued`);
})().catch((e) => {
  console.error(e);
});
