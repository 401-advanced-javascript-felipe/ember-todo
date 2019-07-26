import Component from '@ember/component';
// import { inject } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  storage: Ember.inject.service('storage'),

  actions: {
    remove(item) {
      this.get('storage').remove(item);
    },

    add() {
      let item = this.get('item');
      console.log(item);
      this.get('storage').add(item);
    }

  }
});
