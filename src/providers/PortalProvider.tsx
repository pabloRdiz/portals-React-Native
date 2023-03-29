import React, {createContext, useState} from 'react';

export const PortalContext = createContext({
  gates: {},
  teleport: (gateName: string, element: JSX.Element) => {
    return;
  },
  cleanGates: () => {
    return;
  },
});

interface IProps {
  children: JSX.Element;
}

const PortalProvider = ({children}: IProps) => {
  const [gates, setGates] = useState({});
  console.log(
    '🚀 turbo-cl ~ file: PortalProvider.tsx:19 ~ PortalProvider ~ gates:',
    gates,
  );

  const teleport = (gateName: string, element: JSX.Element) => {
    setGates(prev => {
      return {...gates, [gateName]: element};
    });
  };

  const cleanGates = () => {
    setGates({});
  };

  return (
    <PortalContext.Provider
      value={{gates: gates, teleport: teleport, cleanGates: cleanGates}}>
      {children}
    </PortalContext.Provider>
  );
};

export default PortalProvider;
