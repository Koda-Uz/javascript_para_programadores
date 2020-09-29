export const tree = {
  species: 'appleTree',
  fruit: 'apple',
  getFruit() {
    return this.fruit ? this.fruit : 'No fruit';
  },
};

export default function getFruit(tree) {
  return tree.fruit ? tree.fruit : 'No fruit';
}
