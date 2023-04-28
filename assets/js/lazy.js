var baidu_map = new BMapGL.Map("container");
var point = new BMapGL.Point(113.931398888, 22.537777777777);

var convertor = new BMapGL.Convertor();
var pointArr = [];
pointArr.push(point);
convertor.translate(pointArr, 1, 5, (data) => {
    const point_=data.points[0];
    baidu_map.centerAndZoom(point_, 15);
    var marker = new BMapGL.Marker(point_);
    baidu_map.addOverlay(marker);
    baidu_map.enableScrollWheelZoom(true);
})
