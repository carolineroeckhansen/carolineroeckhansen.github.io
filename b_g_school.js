new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [82, 78, 78, 78, 80],
    [76, 70, 72, 73, 74],
    
  ]
}, {
  high: 85,
  low: 65,
  showArea: true,
  showLine: false,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  }
});