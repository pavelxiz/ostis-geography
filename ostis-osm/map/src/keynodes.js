const MapKeynodes = {
  
}

MapKeynodes.IDENTIFIERS = [
  'nrel_main_idtf',
  'lang_ru',
  'rrel_key_sc_element',
  'sc_illustration',
  'sc_definition',
  'nrel_sc_text_translation',
  'rrel_example',
  'nrel_osm_query',
  'ui_menu_file_for_finding_persons'
];

MapKeynodes.init = function() {
  SCWeb.core.Server.resolveScAddr(MapKeynodes.IDENTIFIERS).then(keynodes => {
    self.keynodes = keynodes;
  });
};


MapKeynodes.get = function(identifier) {
  return this.keynodes[identifier];
};