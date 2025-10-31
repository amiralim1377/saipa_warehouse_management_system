export function sortByNumericName(items) {
  return [...items].sort((a, b) => {
    const numA = parseInt(a.name.replace(/\D/g, ""), 10);
    const numB = parseInt(b.name.replace(/\D/g, ""), 10);
    return numA - numB;
  });
}
