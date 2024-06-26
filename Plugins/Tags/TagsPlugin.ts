import { DefinePlugin, Plugin } from "../../Common/DefinePlugin";
import { TagCommand, TagCreateModal, TagEditModal, TagEvent, ResolveCommand } from "../../Tags";

export = DefinePlugin({
  name: "tags",
  description: "Tags for the No Text To Speech support team!",
  commands: [TagCommand, ResolveCommand],
  events: [TagCreateModal, TagEditModal, TagEvent],
  public_plugin: true
}) as Plugin;
