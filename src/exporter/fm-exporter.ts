import { FMModel } from "../model/fm-model";

/**
 * Generate json file
 */
export class FMExporter {

    constructor(public model: FMModel){

    }

    public generate() {
        this.model.elements
    }    

}