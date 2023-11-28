import St from "gi://St"

import { Extension } from "resource:///org/gnome/shell/extensions/extension.js"
import * as Main from "resource:///org/gnome/shell/ui/main.js"
import * as PanelMenu from "resource:///org/gnome/shell/ui/panelMenu.js"

import { Icons } from "./lib/icons"

export default class ExampleExtension extends Extension {
	#indicator: PanelMenu.Button | undefined

	enable() {
		// Intialize the icons
		new Icons(this.path)

		// Create a panel button
		this.#indicator = new PanelMenu.Button(0.0, "example", false)

		// Add an icon
		const icon = new St.Icon({
			gicon: Icons.get("smile"),
			style_class: "system-status-icon",
		})
		this.#indicator.add_child(icon)

		// Add the indicator to the panel
		Main.panel.addToStatusArea(this.uuid, this.#indicator)
	}

	disable() {
		if (!this.#indicator) return

		this.#indicator.destroy()
		this.#indicator = undefined
	}
}
