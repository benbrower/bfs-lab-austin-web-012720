function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootnode]
  let order = [rootNode];

  while (queue.length != 0){
    let currentNode = queue.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    order = order.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, AdjacentNodes);
    queue = queue.concat(adjacentNodes);
  }
  return order;
}

//returns adjacent nodes
function findAdjacent(node, vertices, queue){
  return
}

//updates node with its predecessor node and distance from root
function markDistanceAndPredecessor(node, parent, distance){

}
