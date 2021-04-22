import { FameDescription, fameProperty } from "./annotation";
import { FMElement } from "./fm-element";
import { FMProperty } from "./fm-property";
import { FMType } from "./fm-type";

@FameDescription({
    famePackage: {name: 'FM3'},
    fameDescription: 'Package'
})
export class FMPackage extends FMElement {
    classes?: FMType[]
    extensions?: FMProperty[]
}