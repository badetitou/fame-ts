import { FameDescription } from "./annotation";

@FameDescription({
    famePackage: { name: 'FM3'},
    fameDescription: 'Element',
    fameProperties: [
        {
            name: 'owner',
            derived: true
        }
    ]
})
export class FMElement {

    owner?: FMElement

    name?: string

    fullname? = () : string =>  {
        return ''
    }
}