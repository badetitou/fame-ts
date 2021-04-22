import { FameDescription } from './annotation';
import { FMType } from './fm-type';

@FameDescription({
    famePackage: {
        name: 'FM3'
    },
    fameDescription: 'Class',
    fameProperties: [
        {
            name: 'abstract'
        }
    ]
})
export class FMClass extends FMType {

   abstract: boolean
   subclass: FMClass
   superclass: FMClass

   get primitive(): boolean {
       return false
   }

    get root(): boolean {
        return false
    }

}