<div style={styles.propContainer}>
  <h3>Table Properties</h3>
  <TextField
    floatingLabelText="Table Body Height"
    defaultValue={this.state.height}
    onChange={this.handleChange}
  />
  <Toggle
    name="fixedHeader"
    label="Fixed Header"
    onToggle={this.handleToggle}
    defaultToggled={this.state.fixedHeader}
  />
  <Toggle
    name="fixedFooter"
    label="Fixed Footer"
    onToggle={this.handleToggle}
    defaultToggled={this.state.fixedFooter}
  />
  <Toggle
    name="selectable"
    label="Selectable"
    onToggle={this.handleToggle}
    defaultToggled={this.state.selectable}
  />
  <Toggle
    name="multiSelectable"
    label="Multi-Selectable"
    onToggle={this.handleToggle}
    defaultToggled={this.state.multiSelectable}
  />
  <Toggle
    name="enableSelectAll"
    label="Enable Select All"
    onToggle={this.handleToggle}
    defaultToggled={this.state.enableSelectAll}
  />
  <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
  <Toggle
    name="deselectOnClickaway"
    label="Deselect On Clickaway"
    onToggle={this.handleToggle}
    defaultToggled={this.state.deselectOnClickaway}
  />
  <Toggle
    name="stripedRows"
    label="Stripe Rows"
    onToggle={this.handleToggle}
    defaultToggled={this.state.stripedRows}
  />
  <Toggle
    name="showRowHover"
    label="Show Row Hover"
    onToggle={this.handleToggle}
    defaultToggled={this.state.showRowHover}
  />
  <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
  <Toggle
    name="showCheckboxes"
    label="Show Checkboxes"
    onToggle={this.handleToggle}
    defaultToggled={this.state.showCheckboxes}
  />
</div>