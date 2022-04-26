import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get(':country')
  public async show(@Param('country') country: string): Promise<any> {
    try {
      const feature = await this.countriesService.getFeature(country);
      if (!feature) {
        throw new BadRequestException('Cannot find any data.');
      }

      return feature;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
