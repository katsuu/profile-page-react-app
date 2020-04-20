export default function getName(person, displayOptions) {
  const options = {
    displayHonorific: false,
    displayShortName: false,
    displayUsername: true,
    hideName: false,
    ...displayOptions
  };

  const { first, last, honorific } = person.name;

  let name = "";

  if (options.displayHonorific && honorific) {
    name = `${honorific} `;
  }

  if (!options.hideName) {
    if (options.displayShortName) {
      name += `${first.charAt(0)}. `;
    } else {
      name += `${first} `;
    }

    name += `${last}`;
  }

  if (options.displayUsername) {
    name += options.hideName ? `${person.username}` : ` (${person.username})`;
  }

  return name;
}
