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
function findAdjacent(name, vertices, queue){
  return edges.filter(function(edge) {
    return edge.includes(name)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != name)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distance==null;
  })
}

//updates node with its predecessor node and distance from root
function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map(function(node){
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}



function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}
