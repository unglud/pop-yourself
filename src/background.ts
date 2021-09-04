(async () => {
  // settings
  await chrome.action.setBadgeBackgroundColor({ color: "green" });

  // context menu
  const contextMenuAction = (info: chrome.contextMenus.OnClickData) =>
    console.log(`contextMenuAction`, info);

  chrome.contextMenus.onClicked.addListener(contextMenuAction);
  chrome.contextMenus.create({
    id: "context",
    contexts: ["all"],
    title: "!Pop it!",
  });

  // main
  chrome.action.onClicked.addListener(async (tab) => {
    await chrome.action.setBadgeText({ text: "1", tabId: tab.id });
  });

})().catch((e) => {
  console.error(e);
});
