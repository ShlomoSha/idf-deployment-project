import { createContext } from "react";
import Deployment from "../types/deployment";

const DeplolymentContext = createContext<Deployment | undefined>(undefined)

export default DeplolymentContext