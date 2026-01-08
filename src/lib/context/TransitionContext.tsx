"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface TransitionContextType {
    isLoaded: boolean;
    setLoaded: (loaded: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType>({
    isLoaded: false,
    setLoaded: () => { },
});

export const useTransitionContext = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <TransitionContext.Provider value={{ isLoaded, setLoaded: setIsLoaded }}>
            {children}
        </TransitionContext.Provider>
    );
};
