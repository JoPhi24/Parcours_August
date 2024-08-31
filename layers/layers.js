var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParkourspotsErweiterungen_1 = new ol.format.GeoJSON();
var features_ParkourspotsErweiterungen_1 = format_ParkourspotsErweiterungen_1.readFeatures(json_ParkourspotsErweiterungen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkourspotsErweiterungen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkourspotsErweiterungen_1.addFeatures(features_ParkourspotsErweiterungen_1);
var lyr_ParkourspotsErweiterungen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkourspotsErweiterungen_1, 
                style: style_ParkourspotsErweiterungen_1,
                popuplayertitle: "Parkourspots-Erweiterungen",
                interactive: false,
                title: '<img src="styles/legend/ParkourspotsErweiterungen_1.png" /> Parkourspots-Erweiterungen'
            });
var format_ParkourSpots_2 = new ol.format.GeoJSON();
var features_ParkourSpots_2 = format_ParkourSpots_2.readFeatures(json_ParkourSpots_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkourSpots_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkourSpots_2.addFeatures(features_ParkourSpots_2);
var lyr_ParkourSpots_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkourSpots_2, 
                style: style_ParkourSpots_2,
                popuplayertitle: "Parkour-Spots",
                interactive: true,
                title: '<img src="styles/legend/ParkourSpots_2.png" /> Parkour-Spots'
            });
var format_Zentroide_3 = new ol.format.GeoJSON();
var features_Zentroide_3 = format_Zentroide_3.readFeatures(json_Zentroide_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_3.addFeatures(features_Zentroide_3);
var lyr_Zentroide_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_3, 
                style: style_Zentroide_3,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_3.png" /> Zentroide'
            });
var format_Zentroide_4 = new ol.format.GeoJSON();
var features_Zentroide_4 = format_Zentroide_4.readFeatures(json_Zentroide_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_4.addFeatures(features_Zentroide_4);
var lyr_Zentroide_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_4, 
                style: style_Zentroide_4,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_4.png" /> Zentroide'
            });
var format_Zentroide_5 = new ol.format.GeoJSON();
var features_Zentroide_5 = format_Zentroide_5.readFeatures(json_Zentroide_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_5.addFeatures(features_Zentroide_5);
var lyr_Zentroide_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_5, 
                style: style_Zentroide_5,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_5.png" /> Zentroide'
            });
var format_Zentroide_6 = new ol.format.GeoJSON();
var features_Zentroide_6 = format_Zentroide_6.readFeatures(json_Zentroide_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_6.addFeatures(features_Zentroide_6);
var lyr_Zentroide_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_6, 
                style: style_Zentroide_6,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_6.png" /> Zentroide'
            });
var format_Zentroide_7 = new ol.format.GeoJSON();
var features_Zentroide_7 = format_Zentroide_7.readFeatures(json_Zentroide_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_7.addFeatures(features_Zentroide_7);
var lyr_Zentroide_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_7, 
                style: style_Zentroide_7,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_7.png" /> Zentroide'
            });
var format_Zentroide_8 = new ol.format.GeoJSON();
var features_Zentroide_8 = format_Zentroide_8.readFeatures(json_Zentroide_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_8.addFeatures(features_Zentroide_8);
var lyr_Zentroide_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_8, 
                style: style_Zentroide_8,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_8.png" /> Zentroide'
            });
var format_Zentroide_9 = new ol.format.GeoJSON();
var features_Zentroide_9 = format_Zentroide_9.readFeatures(json_Zentroide_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_9.addFeatures(features_Zentroide_9);
var lyr_Zentroide_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_9, 
                style: style_Zentroide_9,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_9.png" /> Zentroide'
            });
var format_Zentroide_10 = new ol.format.GeoJSON();
var features_Zentroide_10 = format_Zentroide_10.readFeatures(json_Zentroide_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_10.addFeatures(features_Zentroide_10);
var lyr_Zentroide_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_10, 
                style: style_Zentroide_10,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_10.png" /> Zentroide'
            });
var format_Zentroide_11 = new ol.format.GeoJSON();
var features_Zentroide_11 = format_Zentroide_11.readFeatures(json_Zentroide_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_11.addFeatures(features_Zentroide_11);
var lyr_Zentroide_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_11, 
                style: style_Zentroide_11,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_11.png" /> Zentroide'
            });
var format_Zentroide_12 = new ol.format.GeoJSON();
var features_Zentroide_12 = format_Zentroide_12.readFeatures(json_Zentroide_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_12.addFeatures(features_Zentroide_12);
var lyr_Zentroide_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_12, 
                style: style_Zentroide_12,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_12.png" /> Zentroide'
            });
var format_Zentroide_13 = new ol.format.GeoJSON();
var features_Zentroide_13 = format_Zentroide_13.readFeatures(json_Zentroide_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_13.addFeatures(features_Zentroide_13);
var lyr_Zentroide_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_13, 
                style: style_Zentroide_13,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_13.png" /> Zentroide'
            });
var format_Zentroide_14 = new ol.format.GeoJSON();
var features_Zentroide_14 = format_Zentroide_14.readFeatures(json_Zentroide_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_14.addFeatures(features_Zentroide_14);
var lyr_Zentroide_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_14, 
                style: style_Zentroide_14,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_14.png" /> Zentroide'
            });
var format_Zentroide_15 = new ol.format.GeoJSON();
var features_Zentroide_15 = format_Zentroide_15.readFeatures(json_Zentroide_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_15.addFeatures(features_Zentroide_15);
var lyr_Zentroide_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_15, 
                style: style_Zentroide_15,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_15.png" /> Zentroide'
            });
var format_Zentroide_16 = new ol.format.GeoJSON();
var features_Zentroide_16 = format_Zentroide_16.readFeatures(json_Zentroide_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_16.addFeatures(features_Zentroide_16);
var lyr_Zentroide_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_16, 
                style: style_Zentroide_16,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_16.png" /> Zentroide'
            });
var format_Zentroide_17 = new ol.format.GeoJSON();
var features_Zentroide_17 = format_Zentroide_17.readFeatures(json_Zentroide_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_17.addFeatures(features_Zentroide_17);
var lyr_Zentroide_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_17, 
                style: style_Zentroide_17,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_17.png" /> Zentroide'
            });
var format_Zentroide_18 = new ol.format.GeoJSON();
var features_Zentroide_18 = format_Zentroide_18.readFeatures(json_Zentroide_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_18.addFeatures(features_Zentroide_18);
var lyr_Zentroide_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_18, 
                style: style_Zentroide_18,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_18.png" /> Zentroide'
            });
var format_Zentroide_19 = new ol.format.GeoJSON();
var features_Zentroide_19 = format_Zentroide_19.readFeatures(json_Zentroide_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_19.addFeatures(features_Zentroide_19);
var lyr_Zentroide_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_19, 
                style: style_Zentroide_19,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_19.png" /> Zentroide'
            });
var format_Zentroide_20 = new ol.format.GeoJSON();
var features_Zentroide_20 = format_Zentroide_20.readFeatures(json_Zentroide_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_20.addFeatures(features_Zentroide_20);
var lyr_Zentroide_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_20, 
                style: style_Zentroide_20,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_20.png" /> Zentroide'
            });
var format_Zentroide_21 = new ol.format.GeoJSON();
var features_Zentroide_21 = format_Zentroide_21.readFeatures(json_Zentroide_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_21.addFeatures(features_Zentroide_21);
var lyr_Zentroide_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_21, 
                style: style_Zentroide_21,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_21.png" /> Zentroide'
            });
var format_Zentroide_22 = new ol.format.GeoJSON();
var features_Zentroide_22 = format_Zentroide_22.readFeatures(json_Zentroide_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_22.addFeatures(features_Zentroide_22);
var lyr_Zentroide_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_22, 
                style: style_Zentroide_22,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_22.png" /> Zentroide'
            });
var format_Zentroide_23 = new ol.format.GeoJSON();
var features_Zentroide_23 = format_Zentroide_23.readFeatures(json_Zentroide_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_23.addFeatures(features_Zentroide_23);
var lyr_Zentroide_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_23, 
                style: style_Zentroide_23,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_23.png" /> Zentroide'
            });
var format_Zentroide_24 = new ol.format.GeoJSON();
var features_Zentroide_24 = format_Zentroide_24.readFeatures(json_Zentroide_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_24.addFeatures(features_Zentroide_24);
var lyr_Zentroide_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_24, 
                style: style_Zentroide_24,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_24.png" /> Zentroide'
            });
var format_Zentroide_25 = new ol.format.GeoJSON();
var features_Zentroide_25 = format_Zentroide_25.readFeatures(json_Zentroide_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_25.addFeatures(features_Zentroide_25);
var lyr_Zentroide_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_25, 
                style: style_Zentroide_25,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_25.png" /> Zentroide'
            });
var format_Zentroide_26 = new ol.format.GeoJSON();
var features_Zentroide_26 = format_Zentroide_26.readFeatures(json_Zentroide_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_26.addFeatures(features_Zentroide_26);
var lyr_Zentroide_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_26, 
                style: style_Zentroide_26,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_26.png" /> Zentroide'
            });
var format_Zentroide_27 = new ol.format.GeoJSON();
var features_Zentroide_27 = format_Zentroide_27.readFeatures(json_Zentroide_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_27.addFeatures(features_Zentroide_27);
var lyr_Zentroide_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_27, 
                style: style_Zentroide_27,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_27.png" /> Zentroide'
            });
var format_Zentroide_28 = new ol.format.GeoJSON();
var features_Zentroide_28 = format_Zentroide_28.readFeatures(json_Zentroide_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_28.addFeatures(features_Zentroide_28);
var lyr_Zentroide_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_28, 
                style: style_Zentroide_28,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_28.png" /> Zentroide'
            });
var format_Zentroide_29 = new ol.format.GeoJSON();
var features_Zentroide_29 = format_Zentroide_29.readFeatures(json_Zentroide_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_29.addFeatures(features_Zentroide_29);
var lyr_Zentroide_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_29, 
                style: style_Zentroide_29,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_29.png" /> Zentroide'
            });
var format_Zentroide_30 = new ol.format.GeoJSON();
var features_Zentroide_30 = format_Zentroide_30.readFeatures(json_Zentroide_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_30.addFeatures(features_Zentroide_30);
var lyr_Zentroide_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_30, 
                style: style_Zentroide_30,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_30.png" /> Zentroide'
            });
var format_Zentroide_31 = new ol.format.GeoJSON();
var features_Zentroide_31 = format_Zentroide_31.readFeatures(json_Zentroide_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_31.addFeatures(features_Zentroide_31);
var lyr_Zentroide_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_31, 
                style: style_Zentroide_31,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_31.png" /> Zentroide'
            });
var format_Zentroide_32 = new ol.format.GeoJSON();
var features_Zentroide_32 = format_Zentroide_32.readFeatures(json_Zentroide_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_32.addFeatures(features_Zentroide_32);
var lyr_Zentroide_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_32, 
                style: style_Zentroide_32,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_32.png" /> Zentroide'
            });
var format_Zentroide_33 = new ol.format.GeoJSON();
var features_Zentroide_33 = format_Zentroide_33.readFeatures(json_Zentroide_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zentroide_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zentroide_33.addFeatures(features_Zentroide_33);
var lyr_Zentroide_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zentroide_33, 
                style: style_Zentroide_33,
                popuplayertitle: "Zentroide",
                interactive: false,
                title: '<img src="styles/legend/Zentroide_33.png" /> Zentroide'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ParkourspotsErweiterungen_1.setVisible(true);lyr_ParkourSpots_2.setVisible(true);lyr_Zentroide_3.setVisible(true);lyr_Zentroide_4.setVisible(true);lyr_Zentroide_5.setVisible(true);lyr_Zentroide_6.setVisible(true);lyr_Zentroide_7.setVisible(true);lyr_Zentroide_8.setVisible(true);lyr_Zentroide_9.setVisible(true);lyr_Zentroide_10.setVisible(true);lyr_Zentroide_11.setVisible(true);lyr_Zentroide_12.setVisible(true);lyr_Zentroide_13.setVisible(true);lyr_Zentroide_14.setVisible(true);lyr_Zentroide_15.setVisible(true);lyr_Zentroide_16.setVisible(true);lyr_Zentroide_17.setVisible(true);lyr_Zentroide_18.setVisible(true);lyr_Zentroide_19.setVisible(true);lyr_Zentroide_20.setVisible(true);lyr_Zentroide_21.setVisible(true);lyr_Zentroide_22.setVisible(true);lyr_Zentroide_23.setVisible(true);lyr_Zentroide_24.setVisible(true);lyr_Zentroide_25.setVisible(true);lyr_Zentroide_26.setVisible(true);lyr_Zentroide_27.setVisible(true);lyr_Zentroide_28.setVisible(true);lyr_Zentroide_29.setVisible(true);lyr_Zentroide_30.setVisible(true);lyr_Zentroide_31.setVisible(true);lyr_Zentroide_32.setVisible(true);lyr_Zentroide_33.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ParkourspotsErweiterungen_1,lyr_ParkourSpots_2,lyr_Zentroide_3,lyr_Zentroide_4,lyr_Zentroide_5,lyr_Zentroide_6,lyr_Zentroide_7,lyr_Zentroide_8,lyr_Zentroide_9,lyr_Zentroide_10,lyr_Zentroide_11,lyr_Zentroide_12,lyr_Zentroide_13,lyr_Zentroide_14,lyr_Zentroide_15,lyr_Zentroide_16,lyr_Zentroide_17,lyr_Zentroide_18,lyr_Zentroide_19,lyr_Zentroide_20,lyr_Zentroide_21,lyr_Zentroide_22,lyr_Zentroide_23,lyr_Zentroide_24,lyr_Zentroide_25,lyr_Zentroide_26,lyr_Zentroide_27,lyr_Zentroide_28,lyr_Zentroide_29,lyr_Zentroide_30,lyr_Zentroide_31,lyr_Zentroide_32,lyr_Zentroide_33];
lyr_ParkourspotsErweiterungen_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ParkourSpots_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_28.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Infos': 'Infos', });
lyr_Zentroide_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Zentroide_31.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Zentroide_32.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Zentroide_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ParkourspotsErweiterungen_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ParkourSpots_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': 'TextEdit', });
lyr_Zentroide_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_28.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Infos': '', });
lyr_Zentroide_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Zentroide_31.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Zentroide_32.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Zentroide_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ParkourspotsErweiterungen_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', });
lyr_ParkourSpots_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - always visible', 'Infos': 'header label - always visible', });
lyr_Zentroide_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_16.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_17.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_20.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_22.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_23.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_24.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_25.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_26.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_27.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_28.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_29.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Infos': 'no label', });
lyr_Zentroide_30.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Zentroide_31.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Zentroide_32.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Zentroide_33.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Zentroide_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});