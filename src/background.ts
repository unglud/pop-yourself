(async () => {
  // settings
  await chrome.action.setBadgeBackgroundColor({ color: "green" });

  // context menu
  const contextMenuAction = (info: chrome.contextMenus.OnClickData) =>
    console.log(`contextMenuAction`, info);

  chrome.contextMenus.onClicked.addListener(contextMenuAction);
  chrome.contextMenus.create({
    id: "context",
    title: "Remove this",
  });

  // main
  chrome.action.onClicked.addListener(async (tab) => {
    await chrome.action.setBadgeText({ text: "1", tabId: tab.id });
  });

  console.log(`unglued1`);
})().catch((e) => {
  console.error(e);
});
