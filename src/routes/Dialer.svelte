<script lang="ts">
  import { OnyxKeys } from 'onyx-keys';
  import { OnyxNavigation } from 'onyx-navigation';
  import ListItem from 'onyx-ui/components/list/ListItem.svelte';
  import Typography from 'onyx-ui/components/Typography.svelte';
  import View from 'onyx-ui/components/view/View.svelte';
  import ViewContent from 'onyx-ui/components/view/ViewContent.svelte';
  import { onDestroy, onMount } from 'svelte';
  import MdPerson from 'svelte-icons/md/MdPerson.svelte';
  import { pop, querystring } from 'svelte-spa-router';
  import ListHeader from '../components/ListHeader.svelte';
  import SoftKeyBar from '../components/SoftKeyBar.svelte';
  import Statusbar from '../components/Statusbar.svelte';
  import type { Contact } from '../models';
  import { Device } from '../services/device';
  import { contacts } from '../stores/contacts';

  let number = $querystring ? $querystring.split('=')[1] : '';

  const keys = OnyxKeys.subscribe(
    {
      on1: async () => {
        number += '1';
      },
      on2: async () => {
        number += '2';
      },
      on3: async () => {
        number += '3';
      },
      on4: async () => {
        number += '4';
      },
      on5: async () => {
        number += '5';
      },
      on6: async () => {
        number += '6';
      },
      on7: async () => {
        number += '7';
      },
      on8: async () => {
        number += '8';
      },
      on9: async () => {
        number += '9';
      },
      on0: async () => {
        number += '0';
      },
      ['on*']: async () => {
        number += '*';
      },
      ['on#']: async () => {
        number += '#';
      },

      onBackspace: async () => {
        if (number === '') {
          pop();
          return;
        }

        number = number.substring(0, number.length - 1);
      },
      onEnter: async () => {
        const item = OnyxNavigation.getActiveGroup()?.getFocusedItem();
        if (item) return;

        Device.call(number);
      },
    },
    { priority: 1 }
  );

  onMount(async () => {
    contacts.refresh();
  });

  onDestroy(() => keys.unsubscribe());

  let results: Contact[] = [];
  $: results =
    number.length > 0
      ? $contacts.filter((a) => a.cleanPhoneNumber.startsWith(number)).slice(0, 20)
      : [];
</script>

<View backgroundImageUrl="images/wallpaper2.png">
  <Statusbar />
  <ViewContent>
    <Typography type="titleLarge" align="center">Make a Call</Typography>
    <div class="number">{number}</div>
    {#if results.length > 0}
      <ListHeader title="Contacts" />
    {/if}
    {#each results as contact}
      <ListItem
        icon={MdPerson}
        primaryText={contact.fullName}
        secondaryText={contact.phoneNumber}
        navi={{
          itemId: contact.id,
          onSelect: () => Device.call(contact.cleanPhoneNumber),
        }}
      />
    {/each}
  </ViewContent>
  <SoftKeyBar center="Call" />
</View>

<style>
  .number {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    padding: 5px 0;
  }
</style>
