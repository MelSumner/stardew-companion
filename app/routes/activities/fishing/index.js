import Route from '@ember/routing/route';
import fetch from 'fetch';
import { capitalize } from '@ember/string';

// const API_URL = 'https://stardew-companion-api.herokuapp.com/api/fish';
const API_URL = '/api/fish.json';

export default class ActivitiesFishingIndexRoute extends Route {
  async model() {
    let response = await fetch(API_URL);
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
