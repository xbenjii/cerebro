import React, { PropTypes, Component } from 'react'
import styles from './styles.css'
import SettingsComponent from './components'

export default class PluginSettings extends Component {
  constructor(props) {
    super(props)
    this.renderSetting = this.renderSetting.bind(this)
  }
  changeSetting(plugin, label, value) {
    this.props.values[label] = value
    this.props.onChange(this.props.values)
  }

  renderSetting(key) {
    const setting = this.props.settings[key]
    const { defaultValue, label, ...restProps } = setting
    const value = key in this.props.values ? this.props.values[key] : defaultValue

    return (
      <SettingsComponent
        key={key}
        label={label || key}
        value={value}
        onChange={newValue => this.changeSetting(this.props.name, key, newValue)}
        {...restProps}
      />
    )
  }

  render() {
    return (
      <div className={styles.settingItem}>
        <label className={styles.header}>{this.props.name}</label>

        {
          Object
            .keys(this.props.settings)
            .map(this.renderSetting)
        }
      </div>
    )
  }
}

PluginSettings.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
