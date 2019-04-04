import {Logger} from '@lcluber/mouettejs';

export type ShaderType = 'VERTEX_SHADER'|'FRAGMENT_SHADER';

export class Shader {

  static create(context:WebGLRenderingContext, str: string, type: ShaderType): WebGLShader | null {
    let shader = context.createShader(context[type]);
    if (shader) {
      context.shaderSource(shader, str);
      context.compileShader(shader);
      if(!context.getShaderParameter(shader, context.COMPILE_STATUS)){
          //console.log(str);
          //console.log(context.getShaderInfoLog(shader));
          Logger.error('shader creation failed : ' + context.getShaderInfoLog(shader));
      }
    }
    return shader;
  }

}
