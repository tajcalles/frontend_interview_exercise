import { handleApiError } from '@/utils/helpers';
import roundData from './data/roundData.json';

export const roundDataStore = async () => {
  try {
    const response = roundData;
    return response;
  } catch (error) {
    return handleApiError(error);
  }
};
