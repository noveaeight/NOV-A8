const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth/window.innerHeight, 0.1, 1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 조명
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

// 상품 (박스로 대체)
const geometry = new THREE.BoxGeometry(1,1.5,0.5);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const product = new THREE.Mesh(geometry, material);
scene.add(product);

// 애니메이션
function animate() {
  requestAnimationFrame(animate);
  product.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

