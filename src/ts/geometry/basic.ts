
import { SubMesh } from './subMesh';

export class BasicMesh {

  vertices    : number[];
  indices     : number[];
  normals     : number[];
  subMeshes   : SubMesh[];
  itemSize    : number;
  // nbSubMeshes : number;
  primitive   : string;

  constructor() {

    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.subMeshes = [];
    this.itemSize = 3;
    this.primitive = 'TRIANGLES';
  }

}
