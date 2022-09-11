<script lang="ts">
  import ColorPickerRow from 'onyx-ui/components/form/ColorPickerRow.svelte';
  import SelectRow from 'onyx-ui/components/form/SelectRow.svelte';
  import ListHeader from 'onyx-ui/components/list/ListHeader.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { TextSize } from 'onyx-ui/enums';
  import Statusbar from '../components/Statusbar.svelte';
  import type { Settings } from '../models';
  import { settings } from '../stores/settings';
  import { themes } from '../themes';

  function handleChange(key: keyof Settings, val: any) {
    console.log('handle change', key, val);

    settings.updateOne(key, val);

    if (key === 'themeId') {
      const theme = themes.find((a) => a.id === $settings.themeId) ?? themes[0];
      settings.update({
        accentColorH: theme.values.accentColorH,
        accentColorS: theme.values.accentColorS,
        accentColorL: theme.values.accentColorL,
        cardColorH: theme.values.cardColorH,
        cardColorS: theme.values.cardColorS,
        cardColorL: theme.values.cardColorL,
        textColorH: theme.values.textColorH,
        textColorS: theme.values.textColorS,
        textColorL: theme.values.textColorL,
        focusColorA: theme.values.focusColorA,
        dividerColorA: theme.values.dividerColorA,
      });
    }
  }
</script>

<View>
  <Statusbar />
  <ViewContent>
    <ListHeader title="Appearance" />
    <SelectRow
      label="Theme"
      value={$settings.themeId}
      options={[
        { id: 'light', label: 'Light' },
        { id: 'dark', label: 'Dark' },
      ]}
      onChange={(val) => handleChange('themeId', val)}
    />
    <ColorPickerRow
      label="Accent Color"
      value={{
        h: $settings.accentColorH,
        s: $settings.accentColorS,
        l: $settings.accentColorL,
      }}
      onChange={(val) =>
        settings.update({
          accentColorH: val.h,
          accentColorS: val.s,
          accentColorL: val.l,
        })}
    />
    <SelectRow
      label="Text Size"
      value={$settings.textSize}
      options={[
        { id: TextSize.Smallest, label: 'Smallest' },
        { id: TextSize.Small, label: 'Small' },
        { id: TextSize.Medium, label: 'Medium' },
        { id: TextSize.Large, label: 'Large' },
        { id: TextSize.Largest, label: 'Largest' },
      ]}
      onChange={(val) => handleChange('textSize', val)}
    />

    <ListHeader title="App List" />
    <SelectRow
      label="Display"
      value={$settings.appListDisplay}
      options={[
        { id: 'list', label: 'List' },
        { id: 'grid', label: 'Grid' },
      ]}
      onChange={(val) => handleChange('appListDisplay', val)}
    />
  </ViewContent>
</View>
