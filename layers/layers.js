var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_etablissement_france_entire_github_1 = new ol.format.GeoJSON();
var features_etablissement_france_entire_github_1 = format_etablissement_france_entire_github_1.readFeatures(json_etablissement_france_entire_github_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etablissement_france_entire_github_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etablissement_france_entire_github_1.addFeatures(features_etablissement_france_entire_github_1);
var lyr_etablissement_france_entire_github_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_etablissement_france_entire_github_1, 
                style: style_etablissement_france_entire_github_1,
                interactive: true,
                title: '<img src="styles/legend/etablissement_france_entire_github_1.png" /> etablissement_france_entière._github'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_etablissement_france_entire_github_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_etablissement_france_entire_github_1];
lyr_etablissement_france_entire_github_1.set('fieldAliases', {'REG_LIBENR': 'REG_LIBENR', 'DEP': 'DEP', 'UAI_DENOMP': 'UAI_DENOMP', 'NAT_LIB': 'NAT_LIB', 'UAI_DENO_1': 'UAI_DENO_1', 'UAI_INDEXA': 'UAI_INDEXA', 'UAI_RNE_RF': 'UAI_RNE_RF', 'UAI_TEL_LB': 'UAI_TEL_LB', 'UAI_ADRINT': 'UAI_ADRINT', 'SECT_LIBCO': 'SECT_LIBCO', });
lyr_etablissement_france_entire_github_1.set('fieldImages', {'REG_LIBENR': 'TextEdit', 'DEP': 'TextEdit', 'UAI_DENOMP': 'TextEdit', 'NAT_LIB': 'TextEdit', 'UAI_DENO_1': 'TextEdit', 'UAI_INDEXA': 'TextEdit', 'UAI_RNE_RF': 'TextEdit', 'UAI_TEL_LB': 'TextEdit', 'UAI_ADRINT': 'TextEdit', 'SECT_LIBCO': 'TextEdit', });
lyr_etablissement_france_entire_github_1.set('fieldLabels', {'REG_LIBENR': 'inline label', 'DEP': 'inline label', 'UAI_DENOMP': 'inline label', 'NAT_LIB': 'inline label', 'UAI_DENO_1': 'no label', 'UAI_INDEXA': 'inline label', 'UAI_RNE_RF': 'no label', 'UAI_TEL_LB': 'inline label', 'UAI_ADRINT': 'inline label', 'SECT_LIBCO': 'inline label', });
lyr_etablissement_france_entire_github_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});