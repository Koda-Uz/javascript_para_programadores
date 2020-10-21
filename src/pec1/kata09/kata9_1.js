export default function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit == 'string') {
    return {
      species: species,
      fruit: fruit,
    };
  }
  return null;
}
