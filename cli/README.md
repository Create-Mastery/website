<div align=center>

# Create Mastery CLI

</div>

The official Create Mastery CLI — your tool to enhance DX when working on
the Create Mastery website.

## Installation

You need `tsx` to run the CLI:

```sh
npm install -g tsx
npm install -g @create-mastery/cli
```

## First Step

Before running most commands, make sure you have cloned the Create Mastery website:

```sh
cm clone path/to/destination
```

## Usage

Run the CLI help to see all available commands:

```sh
cm --help
```

### Common Commands

- `cm clone <destination>` — clone the Create Mastery project repo
- `cm add component <name> [--props] [--client]` — create a new component
- `cm add language <language>` — add a new language for i18n
- `cm gen schema` — generate the dictionary JSON schema
- `cm version` — display CLI version and project info
- `cm scripts` — list all scripts from the project package.json

## Version

[GPL 3.0](./LICENSE)
