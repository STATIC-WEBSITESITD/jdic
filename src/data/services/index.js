import internationalCourier from './international-courier';
import exportCommercial from './export-commercial';
import amazonFba from './amazon-fba';
import expressCourier from './express-courier';
import documentationSupport from './documentation-support';
import pickupPackaging from './pickup-packaging';
import groundCourier from './ground-courier';
import domesticCourier from './domestic-courier';
import inboundLogistics from './inbound-logistics';
import worldwideExpress from './worldwide-express';

export const SERVICE_SLUGS = [
  'international-courier',
  'export-commercial',
  'amazon-fba',
  'express-courier',
  'documentation-support',
  'pickup-packaging',
  'ground-courier',
  'domestic-courier',
  'inbound-logistics',
  'worldwide-express',
];

export const serviceContent = {
  'international-courier': internationalCourier,
  'export-commercial': exportCommercial,
  'amazon-fba': amazonFba,
  'express-courier': expressCourier,
  'documentation-support': documentationSupport,
  'pickup-packaging': pickupPackaging,
  'ground-courier': groundCourier,
  'domestic-courier': domesticCourier,
  'inbound-logistics': inboundLogistics,
  'worldwide-express': worldwideExpress,
};
