<script lang="ts">
  import NumericRangeRow from 'onyx-ui/components/form/NumericRangeRow.svelte';
  import ToggleRow from 'onyx-ui/components/form/ToggleRow.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import ListHeader from '../components/ListHeader.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { Settings } from '../models';

  function handleChange(key: keyof Settings, val: any) {
    console.log('handle change', key, val);
  }
</script>

<View>
  <Statusbar />
  <ViewContent>
    <ListHeader title="Network" />
    <ToggleRow
      label="Airplane Mode"
      value={false}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ToggleRow
      label="Cellular Data"
      value={false}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ToggleRow label="Wi-Fi" value={false} onChange={(val) => handleChange('showHelpText', val)} />
    <ToggleRow
      label="Internet Sharing"
      value={false}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ToggleRow
      label="Bluetooth"
      value={false}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ToggleRow
      label="Geolocation"
      value={false}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ListHeader title="Sound" />
    <NumericRangeRow
      label="Media Volume"
      valueLabel=" / 15"
      min={0}
      max={15}
      value={7}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <NumericRangeRow
      label="Ringtone Volume"
      valueLabel=" / 15"
      min={0}
      max={15}
      value={7}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <NumericRangeRow
      label="Alarm Volume"
      valueLabel=" / 15"
      min={0}
      max={15}
      value={7}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ListHeader title="Screen" />
    <NumericRangeRow
      label="Brightness"
      valueLabel="%"
      min={10}
      max={100}
      value={90}
      onChange={(val) => handleChange('showHelpText', val)}
    />
    <ListHeader title="Other" />
    <ToggleRow
      label="Flashlight"
      value={false}
      onChange={(val) => handleChange('showHelpText', val)}
    />
  </ViewContent>
</View>
