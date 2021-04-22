import { FMElement } from "../model/fm-element";
import { FMModel } from "../model/fm-model";

/**
 * I read a JSON file and give a FMModel
 */
export class FMImporter {

    _model: FMModel;

    constructor(protected jsonString: string){
    }

    public extract(): FMModel {
        this._model = new FMModel();
        const json = JSON.parse(this.jsonString);
        this.extractCollectionEntities(json);
        return this._model;
    }

    // private
    
    private extractCollectionEntities(json: any[]){
        json.forEach(entity => {
            this.extractEntity(entity)
        });
    }
    
    private extractEntity(entity: {FM3: string, id: number}) {
        console.log(entity.FM3)
        console.log(this._model)
        console.log(this._model._metamodel)
    }

}