import { createContext } from 'react';

const MachineContext = createContext(null);

export const MachineProvider = MachineContext.Provider;
export const MachineConsumer = MachineContext.Consumer;
export default MachineContext;
