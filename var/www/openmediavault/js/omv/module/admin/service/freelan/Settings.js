/**
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 2
 * @author    Gerik Bonaert <dev@adaxisoft.be>
 * @copyright Copyright (c) 2013 Gerik Bonaert
 *
 * Freelan for OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */
//require("js/omv/WorkspaceManager.js")
//require("js/omv/workspace/form/Panel.js")

/**
* @class OMV.module.admin.privilege.ldap.Settings
* @derived OMV.workspace.form.Panel
*/
Ext.define("OMV.module.admin.service.freelan.Settings", {
	extend: "OMV.workspace.form.Panel",

	rpcService: "Freelan",
	rpcGetMethod: "getSettings",
	rpcSetMethod: "setSettings",

	getFormItems: function() {
		return [{
			xtype: "fieldset",
			title: _("General settings"),
			fieldDefaults: {
				labelSeparator: ""
			},
			items: [{
				xtype: "checkbox",
				name: "enable",
				fieldLabel: _("Enable"),
				checked: false
			},{
				xtype: "textfield",
				name: "server",
				fieldLabel: _("Server"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the URL to contact the Freelan server.")
				}]
			},{
				xtype: "textfield",
				name: "network",
				fieldLabel: _("Network"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the name of the network to connect to.")
				}]
			},{
				xtype: "textfield",
				name: "username",
				fieldLabel: _("Username"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the username needed to connect to the Freelan server.")
				}]
			},{
				xtype: "passwordfield",
				name: "password",
				fieldLabel: _("Password"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the password needed to connect to the Freelan server.")
				}]
			},{
				xtype: "textfield",
				name: "endpoint",
				fieldLabel: _("Public end-point"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies IP of the interface to bind on. Use '0.0.0.0' to bind all interfaces.")
				}]
			}]
		}];
	}
});


OMV.WorkspaceManager.registerPanel({
	id: "settings",
	path: "/service/freelan",
	text: _("Settings"),
	position: 10,
	className: "OMV.module.admin.service.freelan.Settings"
});
