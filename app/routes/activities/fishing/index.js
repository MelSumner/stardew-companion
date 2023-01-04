import Route from '@ember/routing/route';
import fetch from 'fetch';
import { capitalize } from '@ember/string';

export default class ActivitiesFishingIndexRoute extends Route {
  async model() {
    let response = await fetch('/api/fish.json');
    let { data } = await response.json();

    // make sure the variable is declared outside of the loop
    // so we can return it in the model response
    let dataResponse = data.map((record) => {
      let { id, attributes } = record;
      return { id, ...attributes };
    });
    const keys = Object.keys(data[0].attributes);
    const options = keys.map((key) => {
      return { key, label: capitalize(key) };
    });
    return { data: dataResponse, options };
  }
}
