var traverseDomAndCollectElements = function (
  matchFunc,
  startEl = document.body
) {
  var resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl) === true) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí:

  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";

  for (let i = 0; i < selector.length; i++) {
    if (selector[i] === ".") return "tag.class"; // Version Nacho
  }

  // if(selector.includes(".")) return "tag.class"; // CR

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  switch (selectorType) {
    case "id":
      matchFunction = (el) => {
        if(selector[0] === "#") selector = selector.slice(1, selector.length);
        return selector === el.id;
      };
      break;

    case "class":
      matchFunction = (el) => {
        if(selector[0] === ".") selector = selector.slice(1, selector.length);
        for (let clase of el.classList) {
          if (selector === clase) return true;
        }
        return false;
      };
      break;

    case "tag":
      matchFunction = (el) =>
        selector.toLowerCase() === el.tagName.toLowerCase();
      break;

    default:
      matchFunction = (el) => {
        let [tag, clase] = selector.split(".");

        if (
          matchFunctionMaker(tag)(el) &&
          matchFunctionMaker("." + clase)(el)
        ) {
          return true;
        } else {
          return false;
        }
      };
      break;
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
