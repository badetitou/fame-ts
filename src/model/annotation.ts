import "reflect-metadata";
import { FMPackage } from "./fm-package";
import { FMProperty } from "./fm-property";
export { FameDescription }

function FameDescription(param: {famePackage: FMPackage, fameDescription: string, fameProperties?: [FMProperty]}) {
  return function decorator(target: any) {
     target.famePackage = param.famePackage;
     target.fameDescription = param.fameDescription
     target.fameProperties = param.fameProperties
  }
}
