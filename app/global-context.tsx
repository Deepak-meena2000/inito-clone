// this file is used to store global config
"use client";
import { Config } from "@/server/type";
import React, { createContext, useContext } from "react";

export const ConfigContext = createContext<Config>({} as Config);

export const ConfigProvider: React.FC<{
  initialConfig: Config;
  children: React.ReactNode;
}> = ({ initialConfig, children }) => {
  const configContext = {
    ...initialConfig,
  };
  return (
    <ConfigContext.Provider value={configContext}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("ConfigContext is not defined");
  }
  return config;
};
