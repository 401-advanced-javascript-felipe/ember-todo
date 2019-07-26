import Service from '@ember/service';

// export default Service.extend({
//   items: null,

// });


export default Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(item) {
    console.log('in services')
    console.log(item);
    this.get('items').pushObject(item);
    console.log(items);
  },

  remove(item) {
    this.get('items').removeObject(item);
  }
});