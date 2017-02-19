# Skyrim Quests Checklist

This is a checklist for every quest on Elder Scrolls V: Skyrim for 100% completion. It is build in React and reduxq

## Development

To build the frontend (outputs to `frontend/dist`), whilst triggering rebuilds on save:

```bash
$ yarn run watch
```

#### Serve

To serve the frontend you can use the npm module "ecstatic"

```bash
$ cd dist
$ ecstatic
```

#### Clean or Reinstall

To clean `/dist` for rebuild use

```bash
$ yarn run clean
```

To completely reinstall (delete `/node_modules` and `/dist`)

```bash
$ yarn run reinstall
```

## Basic Use

#### Table

The quests are in a material-ui table and there is a simple state object. The config state which defines the table properties, header, etc. The selected state which saves a boolean for each table row to display it as either checked or not checked.

#### Saga

TO DO

#### Tests

TO DO