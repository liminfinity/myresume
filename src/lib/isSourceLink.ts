export const isSourceLink = (contact: string) => {
  return /^https?:\/\/.+/.test(contact);
};
