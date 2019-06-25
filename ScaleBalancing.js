function ScaleBalancing(strArr) {
    var weights = strArr[1].match(/\d+/g).map(Number);
    var weightsOnScale = strArr[0].match(/\d+/g).map(Number);
    var leftWeight = weightsOnScale[0];
    var rightWeight = weightsOnScale[1];

    for (var i = 0; i < weights.length; i++) {
        if (leftWeight < rightWeight) {
            if (leftWeight + weights[i] === rightWeight)
                return weights[i];
        } else {
            if (leftWeight === rightWeight + weights[i])
                return weights[i];
        }
    }
          
    for (var i = 0; i < weights.length; i++) {        
        for (var j = i + 1; j < weights.length; j++) {
            if (leftWeight + weights[i] === rightWeight + weights[j]) {
                return weights[i] + ',' + weights[j];
            } else if (leftWeight + weights[j] === rightWeight + weights[i]) {
                return weights[i] + ',' + weights[j];
            }
            if (leftWeight < rightWeight) {
                if (leftWeight + weights[i] + weights[j] === rightWeight) {
                    return weights[i] + ',' + weights[j];
                }
            } else {
                if (leftWeight === rightWeight + weights[i] + weights[j]) {
                    return weights[i] + ',' + weights[j];
                }
            }            
        }
    }
    
    return 'not possible';
}
   
// keep this function call here 
ScaleBalancing(readline());