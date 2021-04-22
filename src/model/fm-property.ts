import { FameDescription } from "./annotation";
import { FMClass } from "./fm-class";
import { FMElement } from "./fm-element";
import { FMPackage } from "./fm-package";
import { FMType } from "./fm-type";

@FameDescription({
    famePackage: { name: 'FM3' },
    fameDescription: 'Property'
})
export class FMProperty extends FMElement {
    
    class?: FMType
    opposite?: FMProperty
    package?: FMPackage
    type?: FMClass

    composite? = () : boolean => {
        return false
    }

    // get composite(): boolean {
    //     return false
    // }

    container?: boolean = false
    derived?: boolean = false
    multivalued?: boolean = false
}