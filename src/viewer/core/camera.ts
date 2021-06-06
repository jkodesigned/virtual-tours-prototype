import { PerspectiveCamera } from "three";

export class Camera {
  private readonly camera: PerspectiveCamera;

  private readonly fov = 75;
  private readonly near = 1;
  private readonly far = 1100;

  constructor() {
    this.camera = new PerspectiveCamera(this.fov, Camera.calculateAspectRatio(), this.near, this.far);
  }

  public get perspectiveCamera(): PerspectiveCamera {
    return this.camera;
  }

  public onWindowResize = () => {
    this.camera.aspect = Camera.calculateAspectRatio();
    this.camera.updateProjectionMatrix();
  };

  private static calculateAspectRatio(): number {
    return window.innerWidth / window.innerHeight;
  }
}
