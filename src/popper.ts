import "./component.sass";

export const monitorPops = () => {
  document.addEventListener("click", (e) => {
    e.composedPath().forEach((element) => {
      if (element instanceof Element) {
        if (element.matches(".pop-yourself")) {
          console.log(`Removing Element`, element);
          element.remove();
        }
      }
    });
  });

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
};

const excludedElements = [".pop-yourself"];

const getElement = (node: Node) => node.firstChild?.parentElement;

const excluded = (element: HTMLElement) =>
  excludedElements.some((selectorString) => element.matches(selectorString));

const outlineAddedElement = (node: Node) => {
  if (node.nodeName === "#text") {
    return;
  }
  const element = getElement(node);

  if (element && excluded(element)) {
    console.log(`Element is excluded`, excludedElements, element);
    return;
  }

  console.log(`New element added:`, element);
  element!.className += " pop-yourself pop-yourself-outline";
};

const showAttributes = (mutation: MutationRecord) => {
  const element = getElement(mutation.target);
  if (element && excluded(element)) {
    //console.log(`Element is excluded`, excludedElements, element);
    return;
  }
  const changeBox = document.createElement("div");
  changeBox.className = "pop-yourself pop-yourself-attributes";
  let attribute =
    mutation.attributeName === "class" ? "className" : mutation.attributeName;
  if (!attribute) {
    return;
  }

  const previousValue = mutation.oldValue;
  // @ts-ignore
  const currentValue = element[attribute];
  changeBox.innerHTML = `<p>${attribute}: ${previousValue}</p><p>${attribute}: ${currentValue}</p>`;
  element!.appendChild(changeBox);
};

const processMutation = (mutation: MutationRecord) => {
  //console.log(`Mutation detected`, mutation);
  switch (mutation.type) {
    case "childList":
      mutation.addedNodes.forEach(outlineAddedElement);
      break;
    case "attributes":
      showAttributes(mutation);
      break;
  }
};
