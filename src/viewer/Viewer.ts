import { Mesh, MeshBasicMaterial, Scene, SphereBufferGeometry, Texture, TextureLoader, WebGLRenderer } from "three";
// import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Camera } from "viewer/core/camera";

const VIEWER_CONTAINER_ID = "viewer";

export class Viewer {
  private readonly camera: Camera;
  private readonly scene: Scene;
  private readonly loader: TextureLoader;
  private readonly renderer: WebGLRenderer;

  // private controls?: DeviceOrientationControls;
  private controls?: OrbitControls;

  constructor() {
    this.camera = new Camera();
    this.scene = new Scene();
    this.loader = new TextureLoader();
    this.renderer = new WebGLRenderer();
  }

  public async init(src: string, onLoad: () => void = () => null): Promise<void> {
    const container = document.getElementById(VIEWER_CONTAINER_ID) || undefined;

    // TODO: handle unexpected error
    if (!container) return;

    try {
      const texture = await this.loader.loadAsync(src);

      this.createMesh(texture);
      this.initRenderer(container);

      container.appendChild(this.renderer.domElement);

      this.camera.perspectiveCamera.position.set(0, 0, 1);
      // this.camera.perspectiveCamera.position.set(0, 0, 1).normalize().negate();
      // this.controls = new DeviceOrientationControls(this.camera.perspectiveCamera);
      this.controls = new OrbitControls(this.camera.perspectiveCamera, this.renderer.domElement);
      this.controls.rotateSpeed = -0.25;
      this.controls.enableDamping = true;
      this.controls.enablePan = false;
      this.controls.enableZoom = false;
      this.controls.update();

      this.animate();

      onLoad();
    } catch (e) {
      // TODO: onError
      console.error(e);
    }
  }

  private createMesh(texture: Texture): void {
    const geometry = new SphereBufferGeometry(500, 60, 40);
    const material = new MeshBasicMaterial({ map: texture });

    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);

    const mesh = new Mesh(geometry, material);

    this.scene.add(mesh);
  }

  private initRenderer(container: HTMLElement): void {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  private animate = (): void => {
    window.requestAnimationFrame(this.animate);

    this.controls?.update();
    this.renderer.render(this.scene, this.camera.perspectiveCamera);
  };
}
