import { FMMetaModel } from '../src/model/fm-metamodel'
import { FMModel } from '../src/model/fm-model'

describe('Model', () => {
  it('can create a Model', () => {
    new FMModel()
  })
})

describe('MetaModel', () => {
  it('can create a MetaModel', () => {
    new FMMetaModel()
  })
})
