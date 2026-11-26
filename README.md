# Collection Vault v0.9.9.8.2 — startup repair

Replace all seven files in the existing repository root. Keep the same origin and encrypted.html address. Do not uninstall or clear website data.

The v0.9.9.8.1 script-src-elem hash did not match the actual script. Both script directives are now pinned to the same final script bytes. The standard UI stays hidden even if encrypted startup fails, and a visible boot message remains. The offline worker has a new cache name and regenerated file hashes. No changes to vault data, key formats, purge policy or camera logic.

If an old cached page persists, open encrypted.html?refresh=9982 online in Safari for a diagnostic only (Safari may use separate storage). In the installed app, if the old screen persists after closing/reopening online, reopen the installed app after the browser has had a chance to check for its service worker update. Do not recreate a vault if it appears empty.

Test with fictional inventory only. Real iPhone camera, backup recovery, and independent security review remain pending.
