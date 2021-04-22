import { FMElement } from "./fm-element";
import { FMPackage } from "./fm-package";
import { FMProperty } from "./fm-property";
import { FMTrait } from "./fm-trait";
import { FameDescription } from "./annotation";

@FameDescription({
    famePackage: { name: 'FM3' },
    fameDescription: 'Type'
})
export class FMType extends FMElement {

    package: FMPackage
    properties: FMProperty[]
    traits: FMTrait[]
    allProperties: FMProperty[]
}