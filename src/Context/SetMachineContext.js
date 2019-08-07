import { createContext } from 'react';

const SetMachineContext = createContext(null);

export const SetMachineProvider = SetMachineContext.Provider;
export const SetMachineConsumer = SetMachineContext.Consumer;
export default SetMachineContext;
