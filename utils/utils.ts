import { SelectProperty } from '@/schema';

export const getPrice = (property: SelectProperty) => {
  if (property.weeklyRate) {
    return property.weeklyRate;
  } else if (property.nightlyRate) {
    return property.nightlyRate;
  } else {
    return property.monthlyRate;
  }
};

export const getPriceText = (property: SelectProperty) => {
  if (property.weeklyRate) {
    return 'week';
  } else if (property.nightlyRate) {
    return 'night';
  } else {
    return 'month';
  }
};

export const formatStreetName = (street: string) => {
  return street.split(' ').join('+');
};
