import { ENDPOINTS } from '@/common/constants';
import { ReqResPageAPI, UserProfile } from '@/common/types';

export const getAllUsers = async () => {
  const responses = await Promise.all(
    ENDPOINTS.map((endpoint) => fetch(endpoint))
  );

  const dataPromises = responses.map(async (response) => {
    const result: ReqResPageAPI = await response.json();
    const { data }: { data: UserProfile[] } = result;
    return data;
  });

  const dataArray = await Promise.all(dataPromises);

  const combinedData = dataArray.flat();

  return combinedData;
};
