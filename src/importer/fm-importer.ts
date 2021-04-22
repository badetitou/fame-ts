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
    
    private extractEntity(entity: any) {
        console.log(entity)
        // throw new Error("Method not implemented.");
    }

}