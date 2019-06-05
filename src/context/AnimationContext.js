import { createContext } from 'react';

const AnimationContext = createContext(null);

export const AnimationProvider = AnimationContext.Provider;
export const AnimationConsumer = AnimationContext.Consumer;
export default AnimationContext;
