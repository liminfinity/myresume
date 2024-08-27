export const isContactLink = (contact: string) => {
  return /^https?:\/\/.+/.test(contact);
};
