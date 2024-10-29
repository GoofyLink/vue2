import Vue from 'vue'
import VueAMap from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'b8016bb1491ae0f96725638b48623166',
    plugin: [
        'AMap.Geolocation',  //定位空间，用来获取和展示用户主机所在的经纬度位置
        ' AMap.Autocomplete ',  //输入提示插件
        ' AMap.PlaceSearch ', //POI搜索插件
        ' AMap.Scale ',   //右下角缩略图插件，比例尺
        ' AMap.OverView ', //地图鹰眼插件
        ' AMap.ToolBar ',  //地图工具条
        ' AMap.MapType ',  //类别切换空间，实现默认图层与卫星图，实施交通层之间切换的控制
        ' AMap.PolyEditor ', //编辑 折线多边形
        ' AMap.CircleEditor ',
        "AMap.Geocoder",     //地图编码
        'AMap.AMapManager',
        'AMap.Marker'
    ],
});
