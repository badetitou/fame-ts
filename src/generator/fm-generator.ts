import { FMModel } from "../model/fm-model";

/**
 * Generate TypeScript file
 */
export class FMGenerator {

    constructor(public model: FMModel){

    }

    public generate() {
        this.model.elements
    }    

}