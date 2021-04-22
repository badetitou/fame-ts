import { FMElement } from "./fm-element";
import { FMMetaModel } from "./fm-metamodel";

export class FMModel {
    elements: FMElement[]
    _metamodel: FMMetaModel
    
    constructor() {
        this.elements = new Array<FMElement>();
    }

    getMetamodel(): FMMetaModel {
        if (this._metamodel === undefined)
        this._metamodel = new FMMetaModel();
    return this._metamodel;
    }

}