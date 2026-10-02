# Messages

On the **Show** page, open **Messages** beneath the output preview on the right. It is available in Focus Mode too.

1. Click **+ New**. A starter child-pickup notice and banner are created.
2. Fill **Child name**, then press **Show**. The notice appears over the current presentation.
3. Type the next name when ready. The live notice keeps its previous name until you press **Update**.
4. Press **Hide** to remove the notice. Your slide, media and other overlays continue running.

**Edit message** changes the name and wording. Click where a variable belongs in the wording, type any name in **New variable name**, then click **Add variable**. For example, add `Room` to get a separate Room value field after **Save message**. **Insert variable…** reuses a variable already in the message. Variables appear as blue chips; delete a chip to remove that occurrence. Repeated names share one value field. Brace notation, such as `Parents of {Child name}, please come to {Room}.`, still works. Fill every field before showing. **Appearance, timing and scrolling** expands the less frequently used settings.

**Edit design** opens FreeShow's existing overlay editor. **Message artwork** provides **Add shape** for rectangles, rounded rectangles, ellipses and triangles. Shapes start behind the wording. Select an **Artwork layer**, then click **Fill** to choose a solid color, gradient, opacity or no fill. The picker's **Gradient** tab includes presets and **Choose custom** for making your own gradients. Move/resize shapes and text on the canvas; **Backward** and **Forward** change stacking. Native item controls still handle borders, shadows, fonts and images. The primary wording is the starter textbox. **Back to Messages** returns to operating the message and keeps your draft fields. Changes to a saved design appear live when you press Show or Update.

**Preview** in Edit design shows the current design with scrolling and fades without sending it to an output. Empty fields use their variable names in this design preview. Scrolling controls in the native Textbox tab and Edit message now use the same saved settings; changing either takes effect with Show or Update.

Scrolling supports four directions, seconds per pass, repeat, offscreen start, gap and edge feathering. The banner stays still while the text moves. Scrolling text keeps the chosen font size and fits only across the direction of travel: a long horizontal message can extend beyond the box width. **Repeat scrolling** keeps looping until hidden; use **Hide after = 0** to avoid an automatic cutoff. Repeated scrolling feeds continuous copies separated by **Gap (pixels)**; the next starts before the previous one has left. **Start outside the text box** applies when repeat is disabled. A single pass leaves the banner visible after the text exits; set **Hide after** to remove the whole notice automatically.

Fade in/out affects the whole design. **Repeat fade in and out** adds a visible hold and hidden pause. **Hide after = 0** keeps the notice running until you hide it. Updating a timed notice restarts its duration.

**Output destination** selects specific normal outputs. With no boxes checked, Show uses the currently selected outputs. Update changes the outputs where that notice is already live; Hide removes it from all its live outputs. Output locking disables the manual controls. Automatic hide timers continue while locked.

You can create several saved messages and show more than one. Give their designs different positions to avoid overlap. Other active notices have their own Hide button. **Clear all** also clears messages on the selected outputs.

Saved messages and artwork persist across restarts. Entered names and live notices do not restart automatically. Definitions and design changes support FreeShow's normal undo/redo. Read-only overlay profiles may operate messages; hidden overlay categories cannot be shown.
