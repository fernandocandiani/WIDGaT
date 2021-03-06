/*
This file is part of WIDGaT Toolkit

This work is licensed under a Creative Commons Attribution Non-Commercial ShareAlike 3.0 License

Contact:  http://arc.tees.ac.uk/
*/
Ext.define('WIDGaT.model.Action', {
    extend: 'Ext.data.Model',
    fields: [
    	{ name: 'shortName', type: 'string' },
    	{ name: 'name', type: 'string' },
    	{ name: 'icon', type: 'string' }
    ],
	
    associations: [
        { type: 'belongsTo', model: 'WIDGaT.model.Compo', getterName: 'getCompo', setterName: 'setCompo' }
    ],
	
	json4Serv: function() {
		var tmpAc = new Object()
			
		tmpAc.shortName = this.get('shortName');
		tmpAc.name = this.get('name');
		tmpAc.icon = this.get('icon');
			
		return tmpAc;
	}
});