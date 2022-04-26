import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { GEO_DATA_URL } from './constants';

@Injectable()
export class CountriesService {
  async getFeature(country: string): Promise<any> {
    const featureCollection = await (await fetch(GEO_DATA_URL)).json();

    return featureCollection.features.find(
      (feature) => feature.properties.name === country,
    );
  }
}
