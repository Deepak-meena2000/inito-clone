import { NextRequest } from 'next/server';
import { deviceInfo } from './device-info';

export const getConfig = (request: NextRequest) => {
  //todo add more global config
  const config = {
    common: deviceInfo(request),
  };

  return {
    ...config,
  };
};
