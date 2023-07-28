function setup() {

  createCanvas(1024, 768);

  poly_3f_vertices = [[-50,-50,-50],[-75,-75,-75]];

  console.log(poly_3f_vertices.length);
  console.log(poly_3f_vertices[1][0]);

  let vectors = [];

  vectors[0] = new Vector3f(10, 20, 30);

  console.log(vectors[0]);
}

function draw() {

  background(150);

}
