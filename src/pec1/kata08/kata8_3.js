export const tree = {
  species: 'appleTree',
  fruit: 'apple',
  getFruit() {
    return this.fruit ? this.fruit : 'No fruit';
  },
};
