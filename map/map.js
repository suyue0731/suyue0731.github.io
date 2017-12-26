function Map(edges) {
    this.edgeSourceDic = {};
    this.edgeTargetDic = {};
    this.addEdges = function (edges) {
        var that = this;
        edges.forEach(function (edge) {
            if (!(edge.source in that.edgeSourceDic)) {
                that.edgeSourceDic[edge.source] = [];
            }
            if (!(edge.target in that.edgeTargetDic)) {
                that.edgeTargetDic[edge.target] = [];
            }

            that.edgeSourceDic[edge.source].push(edge);
            that.edgeTargetDic[edge.target].push(edge);
        })
    };
    this.getNodeTargets = function (nodeId) {
        return this.edgeSourceDic[nodeId].map(function (edge) { return edge.target; });
    };
    this.getNodeSources = function (nodeId) {
        return this.edgeTargetDic[nodeId].map(function (edge) { return edge.source; });
    };
    this.addEdges(edges);
}