// ** Imports createContext function
import { createContext } from "react";

// ** Imports createContextualCan function
import { createContextualCan } from "@casl/react";

// ** Create Context
export const AbilityContext = createContext<any>({});

// ** Init Can Context
export const Can = createContextualCan(AbilityContext.Consumer);
