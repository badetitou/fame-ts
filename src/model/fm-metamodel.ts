import "reflect-metadata";

import { FMClass } from "./fm-class";
import { FMElement } from "./fm-element";
import { FMModelContract } from "./fm-model-contract";
import { FMPackage } from "./fm-package";
import { FMProperty } from "./fm-property";
import { FMTrait } from "./fm-trait";
import { FMType } from "./fm-type";


export class FMMetaModel implements FMModelContract {

    _metamodel: FMMetaModel
    _elements: Array<FMElement> = new Array<FMElement>();
    _classDict: Map<string, FMClass> = new Map([]); 
    nameDict: Map<string, FMElement> = new Map([]);

    constructor(metamodel?: FMMetaModel) {
        if (metamodel === undefined){
            this.buildFM3()
        }
    }

    getMetamodel(): FMMetaModel {
        if (this._metamodel === undefined)
            this._metamodel = new FMMetaModel();
        return this._metamodel;
    }

    public elementNamed(name: string): FMElement {
        const element = this.nameDict.get(name);
        if (element === undefined)
            throw new Error("Element: " + name + " undefined in the metamodel.");
        return element
    }


    // Private MetaMeta model
    private buildFM3(): void {
        this.with(FMClass);
        this.with(FMElement);
        this.with(FMPackage);
        this.with(FMProperty);
        this.with(FMTrait);
        this.with(FMType);
    }

    private with(element: Object) :void {
        const classs = this.createClass(element);        
        this._elements.push(classs);
        this._classDict.set(this.elementFullName(element), classs)
        this.nameDict.set(this.elementFullName(element), classs)
    }

    private createClass(element: Object): FMClass{
        let classs = new FMClass();
        classs.name = (<any>element).fameDescription
        if ((<any>element).fameProperties !== undefined){
            (<Array<FMProperty>>(<any>element).fameProperties).forEach((property) => {
                this.createProperty(property);
            })
        }
        return classs;
    }

    private createProperty(property: FMProperty){
        console.log(property)
    }

    private elementFullName(element: Object): string {
        return (<any>element).famePackage + "." + (<any>element).fameDescription;
    }

}