import React from 'react';
import projectsData from '../mock/data';

const PortfolioContext = React.createContext(projectsData);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
