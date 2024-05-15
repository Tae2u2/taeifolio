'use client';

import { useCallback, useState } from 'react';

export const useBooleanState = (defaultOpen = false) => {
    const [isTrue, setIsTrue] = useState(defaultOpen);

    const setTrue = useCallback(() => {
        setIsTrue(true);
    }, []);
  
    const setFalse = useCallback(() => {
        setIsTrue(false);
    }, []);

    const setOpposite = useCallback((currentState: boolean) => {
        setIsTrue(!currentState);
    }, []);
  
    return {isTrue,setTrue,setFalse, setOpposite};
  };