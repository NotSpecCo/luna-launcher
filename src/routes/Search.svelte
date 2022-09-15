<script lang="ts">
  import InputRow from 'onyx-ui/components/form/InputRow.svelte';
  import ListItem from 'onyx-ui/components/list/ListItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onMount } from 'svelte';
  import MdPerson from 'svelte-icons/md/MdPerson.svelte';
  import ListHeader from '../components/ListHeader.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { App } from '../entities';
  import type { Contact } from '../models';
  import { apps } from '../stores/apps';
  import { contacts } from '../stores/contacts';

  let query = '';
  let results: { apps: App[]; contacts: Contact[] };

  onMount(async () => {
    apps.refresh();
    contacts.refresh();
  });

  $: {
    if (query.length === 0) {
      results = {
        apps: [],
        contacts: [],
      };
    } else {
      results.apps = $apps.filter((app) => app.name.toLowerCase().startsWith(query.toLowerCase()));
      results.contacts = $contacts.filter((contact) =>
        contact.fullName.toLowerCase().startsWith(query.toLowerCase())
      );
    }
  }
</script>

<View backgroundImageUrl="images/wallpaper2.png">
  <Statusbar />
  <ViewContent>
    <Typography type="titleLarge" align="center">Search</Typography>
    <InputRow value={query} placeholder="Search" onChange={(val) => (query = val)} />
    <ListHeader title="Apps" />
    {#if results.apps.length > 0}
      {#each results.apps as app}
        <ListItem
          imageUrl={app.getIconUrl('smallest')}
          primaryText={app.name}
          secondaryText={app.version}
          navi={{ itemId: app.origin, onSelect: () => app.launch() }}
        />
      {/each}
    {/if}
    <ListHeader title="Contacts" />
    {#if results.contacts.length > 0}
      {#each results.contacts as contact}
        <ListItem
          icon={MdPerson}
          primaryText={contact.fullName}
          secondaryText={contact.phoneNumber}
          navi={{ itemId: contact.id, onSelect: () => {} }}
        />
      {/each}
    {/if}
  </ViewContent>
</View>

<style>
</style>
