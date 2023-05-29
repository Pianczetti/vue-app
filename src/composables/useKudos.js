export const getKudosProperty = (kudoses, props, property) => {
  const foundKudos = kudoses.value.find(kudos => kudos.id === props.kudosId);

  if (foundKudos) {
    switch (property) {
      case "title":
        return foundKudos.title;
      case "img":
        return foundKudos.img;
      default:
        return "";
    }
  }

  return "";
};

export const getKudosGroupProperty = (groups, props, property) => {
  const foundGroup = groups.value.find(group => group.value === props.group);

  if (foundGroup) {
    switch (property) {
      case "label":
        return foundGroup.label;
      case "img":
        return foundGroup.img;
      default:
        return "";
    }
  }

  return "";
};
