import { FameDescription } from "./annotation";
import { FMType } from "./fm-type";

@FameDescription({
    famePackage: { name: 'FM3' },
    fameDescription: 'Trait'
})
export class FMTrait extends FMType {
    get primitive(): boolean {
        return false
    }

    get root(): boolean{
        return false
    }
}